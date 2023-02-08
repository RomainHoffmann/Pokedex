import React from "react"
import human from "/human.png"
import { useActivePokemon } from "../../context/activePokemon"

type Props = {
  size: number
}

const HumanImage = ({ size }: Props) => {
  const { activePokemon } = useActivePokemon()
  return (
    // <div style={{ border: "1px solid" }}></div>

    <img
      src={human}
      style={{
        height: `${size}%`,
        display: "block",
      }}
      alt=""
    />
  )
}

export default HumanImage
