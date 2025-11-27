import { NamedAPIResource } from "@/models/Common";
import { Pokemon } from "@/models/Pokemon";
import { usePokemonDetail } from "@/queries/usePokemon";
import { Card } from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface IPokeDetailProps {
  info: NamedAPIResource | Pokemon;
}

export default function PokeDetail(props: IPokeDetailProps) {
  const { pokemon } = usePokemonDetail(props.info);

  pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <Card className="w-fit bg-orange-50 px-6 shadow-lg">
      <div className="flex flex-row items-center">
        <div className="rounded-full bg-slate-100 mr-6 h-fit">
          <Image
            loading="eager"
            src={pokemon.sprites.front_default || ""}
            alt={`Image of ${pokemon.name}`}
            width="0"
            height="0"
            sizes="10vw"
            className="w-28 h-auto"
          />
        </div>

        <div className="min-w-60 flex flex-col gap-2">
          <div>
            <h4 className="text-xs font-bold">NAME</h4>
            <h1 className="text-lg">{pokemon.name}</h1>
            <Separator className="border-indigo-900 border rounded-full" />
          </div>
          <div>
            <h4 className="text-xs font-bold">NUMBER</h4>
            <h1 className="text-lg">{pokemon.id}</h1>
            <Separator className="border-indigo-900 border rounded-full" />
          </div>
          <div>
            <h4 className="text-xs font-bold">TYPE</h4>
            {pokemon.types.map((type, idx) => (
              <h1
                className="text-lg"
                key={`${type}-${idx}`}
              >
                {type.type.name}
              </h1>
            ))}

            <Separator className="border-indigo-900 border rounded-full" />
          </div>
        </div>
      </div>
    </Card>
  );
}
