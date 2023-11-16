import { PokemonType } from "../models/models";
import { http } from "../services/http";
import { useState, useEffect } from "react";
export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  const GetAllThePokemons = async () => {
    const data = await http.getPokemons();
    setPokemons(data.results);
  };
  useEffect(() => {
    GetAllThePokemons();
  }, []);
  return { pokemons, setPokemons };
};
