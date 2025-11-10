"use client";

import { usePokemons } from "@/queries/usePokemon";
import PokeCard from "./PokeCard";
import { JSX, useCallback, useState } from "react";
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
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

export function PokemonInfo() {
  const [limit, setLimit] = useState(25);
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
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
                <SelectItem value="200">200</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </Card>
      <Card className="px-4">
        {ChangePage(offset, setOffset, limit)}
        <div className="grid justify-items-center grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-6 ">
          {!pending &&
            data.map((poke, idx) => (
              <PokeCard
                pokemon={poke}
                key={`${poke.name}-${idx}`}
              />
            ))}
        </div>
      </Card>
    </Card>
  );
}

interface ChangePageProps {
  offset: number;
  setOffset: (updater: (prev: number) => number) => void;
  limit: number;
}

function ChangePage(
  offset: ChangePageProps["offset"],
  setOffset: ChangePageProps["setOffset"],
  limit: ChangePageProps["limit"]
): JSX.Element {
  const currPage = offset / limit + 1;

  const handleClick = useCallback(
    (value: number) => () => {
      if (value != currPage) {
        setOffset((prev) => prev + value * limit);
      }
    },
    [setOffset]
  );

  return (
    <div className="flex justify-center gap-10">
      <Button
        disabled={offset == 0}
        onClick={() => setOffset((prev) => prev - limit)}
      >
        Prev
      </Button>

      <div>
        <ButtonGroup className="border border-gray-800 rounded-xl">
          {currPage - 2 > 0 && (
            <Button
              className="hover:cursor-pointer"
              onClick={handleClick(-2)}
            >
              {currPage - 2}
            </Button>
          )}
          {currPage - 1 > 0 && (
            <Button
              className="hover:cursor-pointer"
              onClick={handleClick(-1)}
            >
              {currPage - 1}
            </Button>
          )}
          <Button
            className="hover:cursor-pointer"
            variant={"ghost"}
            onClick={handleClick(currPage)}
          >
            {currPage}
          </Button>
          {currPage + 1 < 1328 - 2 && (
            <Button
              className="hover:cursor-pointer"
              onClick={handleClick(1)}
            >
              {currPage + 1}
            </Button>
          )}
          {currPage + 2 < 1328 - 1 && (
            <Button
              className="hover:cursor-pointer"
              onClick={handleClick(2)}
            >
              {currPage + 2}
            </Button>
          )}
        </ButtonGroup>
      </div>

      <Button
        disabled={offset >= 1328 - limit}
        onClick={() => setOffset((prev) => prev + limit)}
      >
        Next
      </Button>
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
