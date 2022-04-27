import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  arrayFavorites: number[];
}

const FavoriteItem = ({ arrayFavorites }: Props) => {
  const router = useRouter();
  const navigatePoke = (id: number) => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <div>
      <Grid.Container gap={2} direction="row" justify="flex-start">
      {arrayFavorites.map((id) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <Card
            onClick={() => navigatePoke(id)}
            bordered
            clickable
            css={{ padding: 10 }}
          >
            <Card.Image
              width={"100%"}
              height={"100%"}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </div>
  );
};

export default FavoriteItem;
