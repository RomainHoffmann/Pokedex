import React from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import human from "/human.png"

type Props = {
  size: number
}

const HumanImage = ({ size }: Props) => {
  const activePokemon = useAppSelector((state) => state.activePokemon)
  return (
    // <div style={{ border: "1px solid" }}></div>

    <img
      src={human}
      style={{
        height: `${size}%`,
        display: "block",
      }}
      alt="human"
    />
  )
}

export default HumanImage
