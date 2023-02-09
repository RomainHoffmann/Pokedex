import React, { useEffect } from "react"
import { fetchPokemon } from "../api/fetchPokemon"

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

const usePokemon = (pathname: string, withInfo: boolean = false) => {
  const [pokemon, setPokemon] = React.useState<PokemonDetailed>()

  useEffect(() => {
    ;(async () => {
      const response: PokemonDetailed = await fetchPokemon(pathname)
      setPokemon(response)
    })()
  }, [pathname])

  return { pokemon }
}

export default usePokemon
