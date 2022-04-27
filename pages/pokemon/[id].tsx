import { Grid } from "@nextui-org/react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "../../components/layout/Layout";
import PokemonUI from "../../components/pokemon/PokemonUI";
import { Pokemon } from "../../types/Pokemon";
import PokeDetails from "../../components/pokemon/PokeDetails";
import pokeApi from "../../Api/pokeApi";
import { getPokemonInfo } from "../../utils/getPokeinfo";

interface Props {
  pokemon: Pokemon;
}

const pokemonPage = ({ pokemon }: Props) => {
  //save array in localStorage

  return (
    <>
      <Layout title={pokemon.name}>
        <Grid.Container
          gap={2}
          css={{
            marginTop: "10px",
          }}
          justify="center"
        >
          <Grid xs={12} sm={6} md={4} xl={3}>
            <PokemonUI pokemon={pokemon} />
          </Grid>
          <Grid xs={12} sm={6} md={4} xl={3}>
            <PokeDetails pokemon={pokemon} />
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default pokemonPage;
