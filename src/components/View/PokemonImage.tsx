import { useAppSelector } from "../../hooks/useAppSelector"

type Props = {
  size: number
}

const PokemonImage = ({ size }: Props) => {
  const activePokemon = useAppSelector((state) => state.activePokemon.pokemon)
  return (
    <img
      src={activePokemon?.info.image.dreamWorld}
      style={{ height: `${size}%` }}
      alt="dd"
    />
  )
}

export default PokemonImage
