import { useAppSelector } from "../../hooks/useAppSelector"
import useComparatorSize from "../../hooks/useComparatorSize"
import HumanImage from "./HumanImage"
import HumanSizeInput from "./HumanSizeInput"
import PokemonImage from "./PokemonImage"

type Props = {
  pokemonSize: number
  pokemonImage: string
}

const PokemonSizeComparator = ({ pokemonSize, pokemonImage }: Props) => {
  const { humanSize } = useAppSelector((state) => state.humanSize)
  const { humanImageSize, pokemonImageSize } = useComparatorSize(
    humanSize,
    pokemonSize
  )

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
          <HumanImage size={humanImageSize}></HumanImage>
          <PokemonImage
            size={pokemonImageSize}
            image={pokemonImage}
          ></PokemonImage>
        </div>
        <HumanSizeInput></HumanSizeInput>
      </div>
    </>
  )
}

export default PokemonSizeComparator
