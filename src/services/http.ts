import axios from "axios";

export const http = {
  getPokemons: async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
  },
};
