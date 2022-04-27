import React, { useState } from "react";

import { Button, Card, Container, Text } from "@nextui-org/react";
import Image from "next/image";

import confetti from "canvas-confetti";

import { Pokemon } from "../../types/Pokemon";
import { toggleFavorites } from "../../utils";
import { exiteFavoritePokemon } from "../../utils/LocalFavorites";

interface Props {
  pokemon: Pokemon;
}
const PokeDetails = ({ pokemon }: Props) => {
  const [favorite, setFavorite] = useState(exiteFavoritePokemon(pokemon.id));

  const ToggleFavorite = () => {
    toggleFavorites(pokemon.id);
    setFavorite(!favorite);

    if (!favorite) {
      confetti({
        particleCount: 100,
        spread: 360,
        startVelocity: 30,
        origin: { x: 0.7, y: 0.2 },
      });
    }
  };

  return (
    <>
      <Card
        key={pokemon.id}
        bordered
        hoverable
        css={{
          mh: 300,
        }}
      >
        <Card.Header css={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={ToggleFavorite} color="gradient" ghost={!favorite}>
            <Text color="white" size={16}>
              {" "}
              {favorite ? "Remove from favorites" : "Add to favorites"}
            </Text>
          </Button>
        </Card.Header>

        <Card.Body>
          <Text size={30}>Sprites:</Text>

          <Container direction="row" display="flex" gap={0}>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            <Image
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default PokeDetails;
