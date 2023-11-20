import { PokemonType } from "../types/pokemon";

export const PokemonList = ({ pokemons }: { pokemons: PokemonType[] }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <li key={pokemon.url}>{pokemon.name}</li>
      ))}
    </>
  );
};
