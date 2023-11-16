import { PokemonType } from "../models/models";

export const PokemonList = ({ pokemons }: { pokemons: PokemonType[] }) => {
  return (
    <>
      {pokemons.map((pokemon) => {
        return <li key={pokemon.url}>{pokemon.name}</li>;
      })}
    </>
  );
};
