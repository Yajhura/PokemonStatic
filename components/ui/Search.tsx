import { Button, Input, Text } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [serchName, setSerchName] = useState<any>("");
  const [PokemonName, setPokemonName] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    const getName = async () => {
      const pokemons = axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");

      const pokemon = await pokemons.then((res) => res.data.results);

      const extraerNombres = pokemon.map((pokemon: any) => {
        return pokemon.name;
      });

      setPokemonName(extraerNombres);
    };
    getName();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = serchName.toLowerCase();
    const verifyname: boolean = PokemonName.includes(name);

    if (verifyname) {

      return router.push(`/names/${name}`);
    } else {
      return alert("Pokemon no encontrado");
    }
    
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
        }}
      >
        <input
          style={{
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#222222",
            color: "#fff",
            outline: "none",
          }}
          type="text"
          onChange={(e) => setSerchName(e.target.value)}
        />

        <Button type="submit" auto ghost color={"gradient"}>
          <Text>Buscar</Text>
        </Button>
      </form>
    </div>
  );
};

export default Search;
