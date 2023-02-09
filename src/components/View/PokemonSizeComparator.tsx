import { useEffect, useState } from "react"
import useComparatorSize from "../../hooks/useComparatorSize"
import HumanImage from "./HumanImage"
import HumanSizeInput from "./HumanSizeInput"
import PokemonImage from "./PokemonImage"

const PokemonSizeComparator = () => {
  const { humanSize, pokemonSize } = useComparatorSize()

  useEffect(() => {}, [])

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <HumanImage size={humanSize}></HumanImage>
          <PokemonImage size={pokemonSize}></PokemonImage>
        </div>
        <HumanSizeInput></HumanSizeInput>
      </div>
    </>
  )
}

export default PokemonSizeComparator
