import Image from "next/image";
import { Card } from "./ui/card";
import { Pokemon } from "@/models/Pokemon";
import TypeTag from "./TypeTag";
import Link from "next/link";

interface IPokeCard {
  pokemon: Pokemon;
}

export default function PokeCard({ pokemon }: IPokeCard) {
  return (
    <Link href={`pokemon/${pokemon.id.toString()}`}>
      <Card
        className={`h-full w-50 flex items-center p-2 bg-linear-to-br from-red-700 to-red-950`}
      >
        <div className="flex justify-between items-center w-full gap-2">
          <Card className="p-2 h-15 flex justify-center w-4/6 bg-slate-950">
            <h3 className="text-transform: capitalize text-lg font-bold text-green-700">
              {pokemon.name}
            </h3>
          </Card>
          <div className="flex justify-center items-center rounded-full w-15 h-15 bg-linear-to-t from-zinc-50 from-35% to-red-500 p-1 border-2 border-zinc-950">
            <h4 className="font-bold text-center text-gray-950">{`#${pokemon.id}`}</h4>
          </div>
        </div>

        <Card className="w-full flex items-center border-16 border-zinc-400 py-0 bg-sky-100">
          <Image
            loading="eager"
            src={pokemon.sprites.front_default || ""}
            alt={`Image of ${pokemon.name}`}
            width="0"
            height="0"
            sizes="10vw"
            className="w-28 h-auto"
          />
        </Card>

        <Card className="py-1 gap-2 items-center w-full bg-slate-950">
          <h3 className="font-bold text-green-700">Types</h3>
          <div className="flex items-center gap-0.5">
            {pokemon.types.map((type) => (
              <TypeTag
                type={type}
                key={`${pokemon.name}-${type.slot}`}
              />
            ))}
          </div>
        </Card>
      </Card>
    </Link>
  );
}
