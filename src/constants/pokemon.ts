export const EGG_GROUPS = {
  MONSTER: 1,
  WATER1: 2,
  BUG: 3,
  FLYING: 4,
  GROUND: 5,
  FAIRY: 6,
  PLANT: 7,
  HUMANSHAPE: 8,
  WATER3: 9,
  MINERAL: 10,
  INDETERMINATE: 11,
  WATER2: 12,
  DITTO: 13,
  DRAGON: 14,
  NO_EGGS: 15,
} as const;

export const GENDERS = {
  FEMALE: 1,
  MALE: 2,
  GENDERLESS: 3,
} as const;

export const GROWTH_RATES = {
  SLOW: 1,
  MEDIUM: 2,
  FAST: 3,
  MEDIUM_SLOW: 4,
  SLOW_THEN_VERY_FAST: 5,
  FAST_THEN_VERY_SLOW: 6,
} as const;

export const NATURES = {
  HARDY: 1,
  BOLD: 2,
  MODEST: 3,
  CALM: 4,
  TIMID: 5,
  LONELY: 6,
  DOCILE: 7,
  MILD: 8,
  GENTLE: 9,
  HASTY: 10,
  ADAMANT: 11,
  IMPISH: 12,
  BASHFUL: 13,
  CAREFUL: 14,
  RASH: 15,
  JOLLY: 16,
  NAUGHTY: 17,
  LAX: 18,
  QUIRKY: 19,
  NAIVE: 20,
  BRAVE: 21,
  RELAXED: 22,
  QUIET: 23,
  SASSY: 24,
  SERIOUS: 25,
} as const;

export const POKEATHLON_STATS = {
  SPEED: 1,
  POWER: 2,
  SKILL: 3,
  STAMINA: 4,
  JUMP: 5,
} as const;

export const POKEMON_COLORS = {
  BLACK: 1,
  BLUE: 2,
  BROWN: 3,
  GRAY: 4,
  GREEN: 5,
  PINK: 6,
  PURPLE: 7,
  RED: 8,
  WHITE: 9,
  YELLOW: 10,
} as const;

export const POKEMON_HABITATS = {
  CAVE: 1,
  FOREST: 2,
  GRASSLAND: 3,
  MONTAIN: 4,
  RARE: 5,
  ROUGH_TERRAIN: 6,
  SEA: 7,
  URBAN: 8,
  WATERS_EDGE: 9,
} as const;

export const POKEMON_SHAPES = {
  BALL: 1,
  SQUIGGLE: 2,
  FISH: 3,
  ARMS: 4,
  BLOB: 5,
  UPRIGHT: 6,
  LEGS: 7,
  QUADRUPED: 8,
  WINGS: 9,
  TENTACLES: 10,
  HEADS: 11,
  HUMANOID: 12,
  BUG_WINGS: 13,
  ARMOR: 14,
} as const;

export const STATS = {
  HP: 1,
  ATTACK: 2,
  DEFENSE: 3,
  SPECIAL_ATTACK: 4,
  SPECIAL_DEFENSE: 5,
  SPEED: 6,
  ACCURACY: 7,
  EVASION: 8,
} as const;

export const TYPES = {
  NORMAL: 1,
  FIGHTING: 2,
  FLYING: 3,
  POISON: 4,
  GROUND: 5,
  ROCK: 6,
  BUG: 7,
  GHOST: 8,
  STEEL: 9,
  FIRE: 10,
  WATER: 11,
  GRASS: 12,
  ELECTRIC: 13,
  PSYCHIC: 14,
  ICE: 15,
  DRAGON: 16,
  DARK: 17,
  FAIRY: 18,
  UNKNOWN: 10_001,
  SHADOW: 10_002,
} as const;

export const TYPES_COLORS = {
  NORMAL: {
    style: "bg-gradient-to-br from-neutral-50 to-neutral-400 text-zinc-800",
  },
  FIGHTING: {
    style: "bg-gradient-to-br from-amber-600 to-amber-900 text-zinc-200",
  },
  FLYING: { style: "bg-gradient-to-br from-sky-50 to-sky-300 text-zinc-800" },
  POISON: {
    style: "bg-gradient-to-br from-fuchsia-400 to-fuchsia-800 text-zinc-800",
  },
  GROUND: {
    style: "bg-gradient-to-br from-orange-800 to-orange-950 text-zinc-200",
  },
  ROCK: {
    style: "bg-gradient-to-br from-stone-500 to-stone-800 text-zinc-200",
  },
  BUG: {
    style: "bg-gradient-to-br from-emerald-300 to-emerald-600 text-zinc-800",
  },
  GHOST: {
    style: "bg-gradient-to-br from-violet-700 to-violet-900 text-zinc-200",
  },
  STEEL: { style: "bg-gradient-to-br from-zinc-50 to-zinc-300 text-zinc-800" },
  FIRE: { style: "bg-gradient-to-br from-red-400 to-red-700 text-zinc-200" },
  WATER: { style: "bg-gradient-to-br from-blue-200 to-blue-500 text-zinc-800" },
  GRASS: {
    style: "bg-gradient-to-br from-green-400 to-green-800 text-zinc-200",
  },
  ELECTRIC: {
    style: "bg-gradient-to-br from-yellow-200 to-yellow-400 text-zinc-800",
  },
  PSYCHIC: {
    style: "bg-gradient-to-br from-purple-300 to-purple-500 text-zinc-800",
  },
  ICE: { style: "bg-gradient-to-br from-cyan-100 to-cyan-300 text-zinc-800" },
  DRAGON: {
    style: "bg-gradient-to-br from-indigo-300 to-indigo-600 text-zinc-800",
  },
  DARK: { style: "bg-gradient-to-br from-gray-600 to-gray-950 text-zinc-200" },
  FAIRY: { style: "bg-gradient-to-br from-rose-100 to-rose-400 text-zinc-800" },
  UNKNOWN: {
    style: "bg-gradient-to-br from-slate-300 to-slate-600 text-zinc-800",
  },
  SHADOW: {
    style: "bg-gradient-to-br from-neutral-300 to-neutral-600 text-zinc-800",
  },
} as const;

export const GENERATION_QUANTITIES = [
  0, 151, 251, 386, 493, 649, 721, 809, 905, 1025, 1328,
] as const;
