import { PokemonInfo } from "@/components/PokemonInfo";
import PokemonList from "@/components/PokemonList";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <Card className="px-6">
          <Tabs defaultValue="cards">
            <TabsList>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
            <TabsContent value="cards">
              <PokemonInfo />
            </TabsContent>
            <TabsContent value="list">
              <PokemonList />
            </TabsContent>
          </Tabs>
        </Card>
      </HydrationBoundary>
    </div>
  );
}
