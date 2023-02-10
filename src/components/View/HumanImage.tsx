import { useAppSelector } from "../../hooks/useAppSelector"
import human from "/human.png"

type Props = {
  size: number
}

const HumanImage = ({ size }: Props) => {
  const activePokemon = useAppSelector((state) => state.activePokemon)
  return (
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
