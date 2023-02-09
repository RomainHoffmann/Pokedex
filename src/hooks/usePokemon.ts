import React, { useEffect } from "react"
import { PokemonDetailed } from "../api"
import { getPokemon } from "../api/getPokemon"

const usePokemon = (name: string) => {
  const [pokemon, setPokemon] = React.useState<PokemonDetailed>()
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<any | null>(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const pokemon: PokemonDetailed = await getPokemon(name)
        setPokemon(pokemon)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [name])

  return { pokemon, error, loading }
}

export default usePokemon
