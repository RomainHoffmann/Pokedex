import { colours } from "../../data/typeColors"

type Props = {
  type: string
}

const PokemonType = ({ type }: Props) => {
  return (
    <div
      id="pokemon-type"
      style={{
        backgroundColor: `${colours[type].type}`,
        borderRadius: "10px",
        color: "white",
        minWidth: "45px",
        textAlign: "center",
        padding: "4px 8px",
        textTransform: "capitalize",
        fontWeight: "650",
        letterSpacing: ".5px",
      }}
    >
      {type}
    </div>
  )
}

export default PokemonType
