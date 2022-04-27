import React from "react";
import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { NextPage } from "next";
import axios from "axios";
import { PokemonName } from "../../types/PokemonNames";
import { Layout } from "../../components/layout";
import { Grid } from "@nextui-org/react";
import PokemonUI from "../../components/pokemon/PokemonUI";
import PokeDetails from "../../components/pokemon/PokeDetails";
import { Pokemon } from "../../types/Pokemon";
import { getPokemonInfo } from "../../utils/getPokeinfo";

interface Props {
  pokemon: Pokemon;
}

const PokemonByName = ({ pokemon }: Props) => {
  return (
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
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //buscar pokemon por nombre
  const name = axios.get<PokemonName>(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  const names = await name.then((res) => res.data.results);
  const paths = names.map((name) => ({
    params: { name: name.name },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);
  
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
      pokemon: pokemon,
     
    },
  };
};

export default PokemonByName;
