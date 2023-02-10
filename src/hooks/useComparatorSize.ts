import { useEffect, useState } from "react"
import { useAppSelector } from "./useAppSelector"

const wrongSize = ["dratini", "dragonair", "ekans", "arbok"]
const maxSize = 100

const useComparatorSize = (humanSize: number, pokemonSize: number) => {
  const [sizes, setSizes] = useState({ humanImageSize: 0, pokemonImageSize: 0 })

  useEffect(() => {
    if (humanSize > pokemonSize) {
      setSizes({
        humanImageSize: maxSize,
        pokemonImageSize: (maxSize * pokemonSize) / humanSize,
      })
    } else {
      setSizes({
        humanImageSize: (maxSize * humanSize) / pokemonSize,
        pokemonImageSize: 100,
      })
    }
  }, [humanSize, pokemonSize])

  return { ...sizes }
}

export default useComparatorSize
