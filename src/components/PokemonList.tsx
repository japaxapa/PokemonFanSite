"use client";

import { useResources } from "@/queries/usePokemon";
import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { GENERATION_QUANTITIES } from "@/constants/pokemon";

export default function PokemonList() {
  const { data } = useResources();
  const [pokes, setPokes] = useState(data);
  const [currGen, setCurrGen] = useState(1);

  const gens = Array.from(Array(10).keys());

  const handleChangeGen = useCallback(
    (idx: number) => () => {
      if (idx == 0) {
        setPokes([...data]);
        setCurrGen(1);
      } else {
        const newData = [...data];
        setPokes(
          newData.slice(
            GENERATION_QUANTITIES[idx - 1],
            GENERATION_QUANTITIES[idx]
          )
        );
        setCurrGen(idx);
      }
    },
    [pokes, setPokes]
  );

  return (
    <Card className="px-10">
      <Card className="flex flex-row justify-around px-10 gap-2">
        {gens.map((gen) => {
          if (gen == 0) {
            return (
              <Button
                className="w-20 hover:cursor-pointer"
                variant={pokes.length > 1000 ? "ghost" : "default"}
                onClick={handleChangeGen(0)}
                key={`btn-${gen}`}
              >
                ALL
              </Button>
            );
          } else {
            return (
              <Button
                className="w-20 hover:cursor-pointer"
                variant={currGen == gen && pokes.length < 1000 ? "ghost" : "default"}
                onClick={handleChangeGen(gen)}
                key={`btn-${gen}`}
              >
                Gen {gen}
              </Button>
            );
          }
        })}
      </Card>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-32">Number</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pokes.map((resource, idx) => (
            <TableRow key={`${resource.name}-${idx}`}>
              <TableCell>{GENERATION_QUANTITIES[currGen - 1] + idx + 1}</TableCell>
              <TableCell>{resource.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
