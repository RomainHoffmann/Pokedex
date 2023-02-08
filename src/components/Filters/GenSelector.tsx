import { CSSProperties } from "react"
import { usePokemonFilter } from "../../context/pokemonFilter"
import { generations } from "../../data/generations"

const activeStyle: CSSProperties = { backgroundColor: "red", color: "white" }
const inativeStyle: CSSProperties = {
  backgroundColor: "lightgray",
  color: "grey",
}

const GenSelector = () => {
  const { setGenerationFilter, generationFilter } = usePokemonFilter()
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
      {generations.map((generation, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setGenerationFilter(generation)
            }}
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              textAlign: "center",
              padding: "0px 10px",
              outline: "none",
              ...(generationFilter?.number === generation.number
                ? activeStyle
                : inativeStyle),
            }}
          >
            {generation.number}
          </button>
        )
      })}
    </div>
  )
}

export default GenSelector
