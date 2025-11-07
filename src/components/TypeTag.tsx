import { TYPES_COLORS } from "@/constants/pokemon";
import { PokemonType } from "@/models/Pokemon";

interface ITypeTag {
  type: PokemonType;
}

export default function TypeTag({ type }: ITypeTag) {
  const typeName = type.type.name.toUpperCase();
  const typeColor = typeName as keyof typeof TYPES_COLORS;
  const colors = TYPES_COLORS[typeColor];

  return (
    <div
      className={`flex justify-center ${colors.style} font-bold rounded-md w-full py-0.5 px-2 min-w-15`}
    >
      {typeName}
    </div>
  );
}
