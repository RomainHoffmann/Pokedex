import { CancelToken } from "axios"
import React, { useEffect } from "react"
import { Pokemon } from "../api"
import { getPokemons } from "../api/getPokemons"

const resultPerPage = 9

const usePokemons = (numberOfResults?: number) => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<any | null>(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const pokemons = await getPokemons(numberOfResults)

        setPokemons(pokemons)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [numberOfResults])

  return { pokemons, error, loading, setLoading }
}

export default usePokemons
