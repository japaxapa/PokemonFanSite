import { PokemonInfo } from "@/components/PokemonInfo";
import { pokemonOptions } from "@/queries/usePokemon";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function PokemonPage() {
  const queryClient = new QueryClient();

  void queryClient.prefetchQuery(pokemonOptions);

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PokemonInfo />
      </HydrationBoundary>
    </div>
  );
}
