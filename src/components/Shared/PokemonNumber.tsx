import { padLeadingZeroes } from "../../helpers/padLeadingZeroes"

type Props = {
  index: number
}

const PokemonNumber = ({ index }: Props) => {
  return (
    <div
      id="pokemon-number"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0px .5rem",
        height: 25,
        color: "white",
        fontWeight: "bold",
        backgroundColor: "rgba(255,255,255,0.15)",
        borderRadius: 25,
        border: "1px solid white",
        boxShadow: "0px 0px 15px 3px rgba(0,0,0,0.2)",
      }}
    >
      {`#${padLeadingZeroes(index, 3)}`}
    </div>
  )
}

export default PokemonNumber
