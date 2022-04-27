import { Grid, Text } from "@nextui-org/react";
import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layout";
import { PokeAPi, PokeResult } from "../types/RespPokeApi";
import CardPoke from "../components/pokemon/CardPoke";
import pokeApi from "../Api/pokeApi";

interface Props {
  pokemons: PokeResult[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout>
      <Text
        size={60}
        color="white"
        weight={"black"}
        css={{
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        Lista de Pokemones
      </Text>

      <Grid.Container

        css={{
          padding: "50px",
        }}

        gap={4} justify="center">
        {pokemons.map((pokemon) => {
          return (
            <Grid key={pokemon.id} xs={7} sm={5} md={4} xl={3}>
              <CardPoke pokemon={pokemon} />
            </Grid>
          );
        })}
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokeAPi>('/pokemon?limit=151');

  const pokemons: PokeResult[] = data.results.map((pokemon, id) => {
    return {
      ...pokemon,
      id: id + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id + 1}.svg`
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};
export default Home;
