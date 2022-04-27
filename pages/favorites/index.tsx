import React, { useEffect, useState } from "react";
import { Text } from "@nextui-org/react";
import { Layout } from "../../components/layout";
import { getFavorites } from "../../utils";
import NoFavorites from "../../components/ui/NoFavorites";
import FavoriteItem from "../../components/ui/FavoriteItem";

const Favorites = () => {
  const [arrayFavorites, setArrayFavorites] = useState<number[]>([]);

  useEffect(() => {
    setArrayFavorites(getFavorites);
  }, []);

  return (
    <Layout title="Favorites">
      <Text
        h1
        size={60}
        css={{
          textAlign: "center",
          textGradient: "45deg, $yellow500 -20%, $red500 100%",
        }}
        weight="bold"
      >
        {arrayFavorites.length === 0 ? (
          <NoFavorites />
        ) : (
           <FavoriteItem arrayFavorites={arrayFavorites}/>
        )}
      </Text>
    </Layout>
  );
};

export default Favorites;
