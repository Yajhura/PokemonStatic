import { Text } from "@nextui-org/react";
import React from "react";
import { Layout } from "../layout";

const NoFavorites = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        h1
        size={60}
        css={{
          textAlign: "center",
          textGradient: "45deg, $yellow500 -20%, $red500 100%",
        }}
        weight="bold"
      >
        Not There Favorites
      </Text>
    </div>
  );
};

export default NoFavorites;
