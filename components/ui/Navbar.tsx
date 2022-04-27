import { Button, Text, useTheme } from "@nextui-org/react";
import React from "react";
import style from "./css/navbar.module.css";
import Link from "next/link";
import Search from "./Search";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme?.colors.gray900.value,
      }}
      className={`${style.navbar}`}
    >
      <div>
        <Text
          size={40}
          weight={"bold"}
          css={{
            textGradient: "45deg, $purple500 -20%, $pink500 100%",
          }}
          h3
        >
          <Link href={"/"}> Pokemon</Link>
        </Text>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Link href="/favorites" passHref>
          <Button
            color={"gradient"}
            ghost
            css={{
              marginLeft: "auto",
            }}
          >
            <Text>Favorites</Text>
          </Button>
        </Link>
      </div>
    </div>
  );
};
