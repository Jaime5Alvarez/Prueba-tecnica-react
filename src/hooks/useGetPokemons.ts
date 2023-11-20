import { PokemonType } from "../types/pokemon";
import { http } from "../services/http";
import { useState, useEffect, useCallback } from "react";

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [requestStatus, setRequestStatus] = useState({
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    // It's more common to define getAllPokemon inside useEffect,
    // otherwise it would be defined every time the component is
    // rendered and the state is updated

    // Methods usually are camelCase, not PascalCase (besides React components)
    const getAllPokemons = async () => {
      setRequestStatus({ isLoading: true, isError: false });
      const data = await http
        .getPokemons()
        .then((data) => {
          setRequestStatus({ isLoading: false, isError: false });
          return data;
        })
        .catch(() => setRequestStatus({ isLoading: false, isError: true }));

      setPokemons(data.results);
    };
    getAllPokemons();
  }, []);
  return { pokemons, requestStatus };
};

// Other solution: useCallback avoids recreating the function every time
// the component is rendered and the state is updated
export const useGetPokemonsUseCallback = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  const getAllPokemons = useCallback(async () => {
    const data = await http.getPokemons();
    setPokemons(data.results);
  }, []);

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);
  return { pokemons };
};

// Incorrect:
// If you forget to use useCallback, you will get infite renders
// because the function is in the dependency array and every time
// the component is rendered, the function is recreated in memory,
// even if the function is the same
export const useGetPokemonsIncorrectInfiteRenders = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  const getAllPokemons = async () => {
    const data = await http.getPokemons();
    setPokemons(data.results);
  };

  console.log("Rendering, check console, you should see a lot of of logs");

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);
  return { pokemons };
};
