import { useEffect, useState } from "react"
import { useAppSelector } from "./useAppSelector"

const wrongSize = ["dratini", "dragonair", "ekans", "arbok"]
const maxSize = 100

const useComparatorSize = () => {
  const humanSize = useAppSelector((state) => state.humanSize.humanSize)
  const [sizes, setSizes] = useState({ humanSize: 0, pokemonSize: 0 })

  const activePokemon = useAppSelector((state) => state.activePokemon.pokemon)

  useEffect(() => {
    const pokemonSize =
      (wrongSize.includes(activePokemon!.info.name)
        ? activePokemon!.info.height / 2
        : activePokemon!.info.height) * 100

    if (humanSize > pokemonSize) {
      setSizes({
        humanSize: maxSize,
        pokemonSize: (maxSize * pokemonSize) / humanSize,
      })
    } else {
      setSizes({
        humanSize: (maxSize * humanSize) / pokemonSize,
        pokemonSize: 100,
      })
    }
  }, [activePokemon, humanSize])

  return { ...sizes }
}

export default useComparatorSize
