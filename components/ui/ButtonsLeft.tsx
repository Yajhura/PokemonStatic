import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { Pokemon } from "../../types/Pokemon";
interface Props {
  pokemon: Pokemon;
}

const ButtonLeft = ({ pokemon }: Props) => {
  const router = useRouter();
  const prev = () => {
    if (pokemon.id > 1) {
      return router.push(`/pokemon/${pokemon.id - 1}`);
    }
  };

  return (
    <>
      <Button
        onClick={prev}
        auto
        color="gradient"
        ghost
        css={{
          position: "fixed",
          top: "50%",
          left: "10px",
          zIndex: 21,
        }}
      >
        <AiOutlineCaretLeft />
      </Button>
    </>
  );
};

export default ButtonLeft;
