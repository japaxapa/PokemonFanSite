import Image from "next/image";
import { Card } from "./ui/card";
import { Pokemon } from "@/models/Pokemon";

interface IPokeCard {
  pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: IPokeCard) {
  return (
    <Card className="h-full">
      <div className="flex">
        <h4>{pokemon.id}</h4>
        <h3>{pokemon.name}</h3>
      </div>

      <Image
        loading="eager"
        src={pokemon.sprites.front_default || ""}
        alt={`Image of ${pokemon.name}`}
        width={100}
        height={200}
      />
    </Card>
  );
}
