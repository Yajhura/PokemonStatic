import pokeApi from "../Api/pokeApi";
import { Pokemon } from "../types/Pokemon";

export const getPokemonInfo = async (idOrName: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${idOrName}`);
    return data;
  } catch (error) {
    return null;
  }
};
