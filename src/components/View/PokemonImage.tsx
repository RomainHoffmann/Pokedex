import React from "react"
import { useActivePokemon } from "../../context/activePokemon"

type Props = {
  size: number
}

const PokemonImage = ({ size }: Props) => {
  const { activePokemon } = useActivePokemon()
  return (
    // <div style={{ border: "1px solid" }}></div>
    <img
      src={activePokemon?.info.image.dreamWorld}
      style={{ height: `${size}%` }}
      alt="dd"
    />
  )
}

export default PokemonImage
