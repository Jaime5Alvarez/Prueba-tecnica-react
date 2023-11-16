import axios from "axios";

export const http = {
  getPokemons: async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    return res.data;
  },
};
