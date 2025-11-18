import { NamedAPIResource } from "@/models/Common";
import { Pokemon } from "@/models/Pokemon";
import {
  queryOptions,
  useSuspenseQueries,
  useSuspenseQuery,
} from "@tanstack/react-query";

// returns the segment (string) or null if none
function getIdFromUrl(url: string): string | null {
  const trimmed = url.replace(/\/$/, ""); // remove trailing slash if present
  const parts = trimmed.split("/");
  return parts.length ? parts[parts.length - 1] : null;
}

const fetchPokemonByResource = async (resource: NamedAPIResource): Promise<Pokemon> => {
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

const useResources = () => {
  const resources = useSuspenseQuery({
    queryKey: ["resources"],
    queryFn: () => fetchPokemonsResources(1328, 0),
  });

  return resources;
};

const usePokemon = (resource: NamedAPIResource) => {
  const id = getIdFromUrl(resource.url);
  return useSuspenseQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => fetchPokemonByResource(resource),
  });
};

const usePokemons = (limit: number, offset: number) => {
  const pokemons = useSuspenseQuery({
    queryKey: ["pokemons", limit, offset],
    queryFn: () => fetchPokemonsResources(limit, offset),
  });

  return useSuspenseQueries({
    queries: pokemons.data.map((pokemon) => ({
      queryKey: ["pokemon", getIdFromUrl(pokemon.url)],
      queryFn: () => fetchPokemonByResource(pokemon),
    })),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      };
    },
  });
};

export { usePokemon, usePokemons, useResources };

export const pokemonOptions = queryOptions({
  queryKey: ["pokemon-options"],
  queryFn: async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0"
    );

    return response.json();
  },
});
