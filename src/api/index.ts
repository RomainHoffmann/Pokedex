const baseUrl = "https://pokeapi.co/api/v2/pokemon"

export type PokemonDetailed = {
  info: PokemonInfo
  speciesInfo?: PokemonSpeciesInfo
}

export type PokemonInfo = {
  type: string[]
  image: {
    minimal: string
    officialArtwork: string
    dreamWorld: string
  }
  height: number
  name: string
  weight: number
  id: number
  baseStats: {
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
  }
}

export type PokemonSpeciesInfo = {
  description: string
  isBaby: boolean
  isLegendary: boolean
  isMythical: boolean
  shape: string
  habitat: string
  eggGroup: string[]
  growthRate: string
  hatchCounter: number
  captureRate: number
  category: string
}

export type Pokemon = {
  name: string
  url: string
}

export default { baseUrl }
