import axios from "axios"
import React, { useEffect } from "react"
import { fetchPokemons } from "../api/fetchPokemons"
import { usePokemonFilter } from "../context/pokemonFilter"
import { baseUrl } from "../api"

export type Pokemon = {
  name: string
  url: string
}

const usePokemons = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([])
  const { generationFilter } = usePokemonFilter()

  let url: string
  let limit: string

  useEffect(() => {
    ;(async () => {
      if (generationFilter) {
        limit = `limit=${
          generationFilter.limit.to - generationFilter.limit.from
        }&offset=${generationFilter.limit.from}`
      } else {
        limit = "limit=1&offset=0"
      }
      url = `${baseUrl}?${limit}}`

      setPokemons(await fetchPokemons(url))
    })()
  }, [generationFilter])

  return { pokemons }
}

export default usePokemons
