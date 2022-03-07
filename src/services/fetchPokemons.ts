import axios from "axios";

export const fetchPokemons = async ({ pageParam = 0 }) => {
    const response = await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${pageParam}`)
        .then((res) => {
            return res.data.results;
        })
        .then((results) => {
            return Promise.all(results.map((res) => axios.get(res.url)));
        });

    const pokemons = response.map(pokemon => {
        return {
            id: pokemon.data.id,
            name: pokemon.data.name,
            picture: pokemon.data.sprites.other["official-artwork"]["front_default"],
            types: pokemon.data.types.map(type => type.type.name),
        }
    })
    return { pokemons, nextCursor: pageParam + 9 };
}