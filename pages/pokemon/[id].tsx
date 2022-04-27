import { Button, Grid } from "@nextui-org/react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "../../components/layout/Layout";
import PokemonUI from "../../components/pokemon/PokemonUI";
import { Pokemon } from "../../types/Pokemon";
import PokeDetails from "../../components/pokemon/PokeDetails";
import pokeApi from "../../Api/pokeApi";
import ButtonLeft from "../../components/ui/ButtonsLeft";
import { ButtonRigth } from "../../components/ui/ButtonRight";
import { useRouter } from "next/router";
import { AiOutlineCaretRight } from "react-icons/ai";

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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default pokemonPage;
