"use client";

import { usePokemons } from "@/queries/usePokemon";
import PokeCard from "./PokeCard";

export function PokemonInfo() {
  const { data, pending } = usePokemons(10, 10);

  return (
    <div className="grid justify-items-center grid-cols-4 gap-4">
      {!pending &&
        data.map((poke, idx) => (
          <PokeCard
            pokemon={poke}
            key={`${poke.name}-${idx}`}
          />
        ))}
    </div>
  );
}

// 'use client'

// import React from 'react'
// import { useSuspenseQuery } from '@tanstack/react-query'
// import { pokemonOptions } from '@/app/pokemon'

// export function PokemonInfo() {
//   const { data } = useSuspenseQuery(pokemonOptions)

//   return (
//     <div>
//       <figure>
//         <img src={data.sprites.front_shiny} height={200} alt={data.name} />
//         <h2>I'm {data.name}</h2>
//       </figure>
//     </div>
//   )
// }
