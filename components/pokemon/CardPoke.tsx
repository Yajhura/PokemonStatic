import React from "react";
import { PokeResult } from "../../types/RespPokeApi";
import { Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
interface Props {
  pokemon: PokeResult;
}

const CardPoke = ({ pokemon }: Props) => {
  const router = useRouter();
  const onclick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };
  return (
    <>
      <Card
        onClick={onclick}
        clickable
        bordered
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Header>
          <Text b>{`#${pokemon.id}`}</Text>
        </Card.Header>

        <Card.Image src={pokemon.img} width="100%" height={140} />
        <Text
          size={20}
          transform="uppercase"
          weight={"bold"}
          css={{
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          {pokemon.name}
        </Text>
      </Card>
    </>
  );
};

export default CardPoke;
