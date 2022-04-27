import { Card, Col, Row, Text, theme } from "@nextui-org/react";
import React from "react";
import { Pokemon } from "../../types/Pokemon";

interface Props {
  pokemon: Pokemon;
}

const colors: any = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

const PokemonUI = ({ pokemon }: Props) => {
  const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div>
      <Card

        bordered
        clickable
        css={{
          w: "350px",
          border: `solid 5px ${colors[pokemon.types[0].type.name]}`,
        }}
      >
        <Card.Body>
          <Card.Image
            objectFit="cover"
            width="100%"
            src={pokemon.sprites.other?.dream_world.front_default || ""}
          />
        </Card.Body>
        <Card.Footer>
          <Row
            wrap="wrap"
            css={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text
              size={20}
              transform="uppercase"
              weight={"bold"}
              css={{
                textAlign: "center",
                color: colors[pokemon.types[0].type.name],
              }}
            >
              {pokemon.name}
            </Text>
            <Row
              css={{
                marginTop: "5px",
              }}
            >
              <Text
                size={18}
                weight={"bold"}
                css={{
                  color: theme.colors.gray100,
                }}
              >
                Type:{"   "}
                <span
                  style={{
                    marginLeft: "75px",
                    marginRight: "5px",
                    color: colors[pokemon.types[0].type.name],
                  }}
                >
                  {capitalize(pokemon.types[0].type.name)}
                </span>
              </Text>
            </Row>
            <Row
              css={{
                marginTop: "4px",
              }}
            >
              <Text
                size={18}
                weight={"bold"}
                css={{
                  color: theme.colors.gray100,
                }}
              >
                Ability:{"   "}
                {pokemon.abilities.map((ability: any,i) => (
                  <span
                  key={i}
                    style={{
                      margin: "0 5px",
                      color: colors[pokemon.types[0].type.name],
                    }}
                  >
                    {capitalize(ability.ability.name)}
                  </span>
                ))}
              </Text>
            </Row>
            <Row
              css={{
                marginTop: "4px",
              }}
            >
              <Text
                size={18}
                weight={"bold"}
                css={{
                  color: theme.colors.gray100,
                }}
              >
                Height:{"   "}
                {pokemon.height / 10}m
              </Text>
            </Row>
            <Row
              css={{
                marginTop: "4px",
              }}
            >
              <Text
                size={18}
                weight={"bold"}
                css={{
                  color: theme.colors.gray100,
                }}
              >
                Weight:{"   "}
                {pokemon.weight / 10}kg
              </Text>
            </Row>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PokemonUI;
