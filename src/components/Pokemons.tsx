import { useGetPokemons } from "../hooks/useGetPokemons";
import { PokemonList } from "./PokemonList";
import { useState } from "react";
export const Pokemons = () => {
  const { pokemons, setPokemons } = useGetPokemons();
  const [inputPokemon, setinputPokemon] = useState("");
  const HandleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputPokemon(e.target.value);
  };
  const SortPokemons = () => {
    const sortedPokemons = [...pokemons].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setPokemons(sortedPokemons);
  };
  const filteredPokemons = pokemons.filter((p) => {
    return p.name.toLowerCase().includes(inputPokemon.toLowerCase());
  });
  if (pokemons.length === 0) return <h1>Loading Pokemons...</h1>;
  return (
    <>
      <div className="p-2 m-5">
        <input
          onChange={(e) => HandleChangeInput(e)}
          className="mb-2 border-2 border-blue-800 mr-2"
          type="text"
          placeholder="Search for a pokemon"
        />
        <button
          onClick={SortPokemons}
          className="bg-blue-800 rounded-lg px-2 py-1 text-white hover:bg-opacity-80"
        >
          Sort your pokemons
        </button>

        <PokemonList pokemons={filteredPokemons} />
      </div>
    </>
  );
};
