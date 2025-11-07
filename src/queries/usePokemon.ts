import { NamedAPIResource } from "@/models/Common";
import { Pokemon } from "@/models/Pokemon";
import {
  queryOptions,
  useSuspenseQueries,
  useSuspenseQuery,
} from "@tanstack/react-query";

const fetchPokemon = async (resource: NamedAPIResource): Promise<Pokemon> => {
  const response = await fetch(`${resource.url}`);
  const data = await response.json();
  
  return data;
};

const fetchPokemonsResources = async (
  limit = 10,
  offset = 0
): Promise<Array<NamedAPIResource>> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data.results;
};

const usePokemon = (limit: number, offset: number) => {
  return useSuspenseQuery({
    queryKey: ["pokemon", limit, offset],
    queryFn: () => fetchPokemonsResources(limit, offset),
  });
};

const usePokemons = (limit: number, offset: number) => {
  const pokemons = useSuspenseQuery({
    queryKey: ["pokemons", limit, offset],
    queryFn: () => fetchPokemonsResources(limit, offset),
  });

  return useSuspenseQueries({
    queries: pokemons.data.map((pokemon) => ({
      queryKey: ["pokemon", pokemon.name],
      queryFn: () => fetchPokemon(pokemon),
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
};

export { usePokemon, usePokemons, fetchPokemonsResources };

export const pokemonOptions = queryOptions({
  queryKey: ["pokemon-options"],
  queryFn: async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0"
    );

    return response.json();
  },
});
