"use client";

import { usePokemons } from "@/queries/usePokemon";
import PokeCard from "./PokeCard";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function PokemonInfo() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { data, pending } = usePokemons(limit, offset);

  return (
    <Card className="gap-2">
      <Card className="flex flex-row px-4 justify-between">
        <Input placeholder="Search pokemon by NAME or ID"></Input>
        <div className="grid w-1/4 max-w-sm items-center gap-3">
          <Select onValueChange={(value) => setLimit(parseInt(value))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="# of items per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pkmn per page</SelectLabel>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </Card>
      <Card className="grid justify-items-center grid-cols-auto gap-4">
        {!pending &&
          data.map((poke, idx) => (
            <PokeCard
              pokemon={poke}
              key={`${poke.name}-${idx}`}
            />
          ))}
      </Card>
    </Card>
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
