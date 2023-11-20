import {
  useGetPokemons,
  useGetPokemonsIncorrectInfiteRenders,
  useGetPokemonsUseCallback,
} from "../hooks/useGetPokemons";
import { PokemonList } from "./PokemonList";
import { useState } from "react";
export const Pokemons = () => {
  const {
    pokemons,
    requestStatus: { isLoading, isError },
  } = useGetPokemons();
  const [inputPokemon, setInputPokemon] = useState("");
  const [isListSorted, setIsListSorted] = useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPokemon(e.target.value);
  };

  const handleSortPokemons = () => {
    setIsListSorted(!isListSorted);
  };

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(inputPokemon.toLowerCase())
  );

  if (isLoading) return <h1>Loading Pokemons...</h1>;
  if (isError) return <h1>Something went wrong</h1>;

  return (
    <>
      <div className="p-2 m-5">
        <div className="flex items-center">
          <input
            onChange={(e) => handleChangeInput(e)}
            className="mb-2 border-2 border-blue-800 mr-2"
            type="text"
            placeholder="Search for a pokemon"
          />
          <label>Sort Pokemons</label>
          <input
            type="checkbox"
            onClick={handleSortPokemons}
            className="bg-blue-800 rounded-lg px-2 ml-2 py-1 text-white hover:bg-opacity-80"
          />
        </div>

        <PokemonList
          pokemons={
            isListSorted
              ? [...filteredPokemons].sort((a, b) =>
                  a.name.localeCompare(b.name)
                )
              : filteredPokemons
          }
        />
      </div>
    </>
  );
};
