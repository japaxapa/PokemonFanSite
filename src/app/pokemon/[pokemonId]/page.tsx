"use client";

import { useQuery } from "@tanstack/react-query";
import PokeDetail from "@/components/PokeDetails";
import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";

async function fetchResourceById(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  if (!res.ok) throw new Error("Failed to fetch pokemon");
  return res.json();
}

export default function PokemonDetailsPage() {
  const { pokemonId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["resource", pokemonId],
    queryFn: () => fetchResourceById(pokemonId! as string),
    enabled: !!pokemonId, // only run when we have an id
  });

  if (!pokemonId || isLoading) return <Card>Loading...</Card>;
  if (error) return <Card>Error loading pokemon</Card>;

  return (
    <Card className="flex items-center shadow-xl">
      <PokeDetail info={data} />
    </Card>
  );
}
