import { CSSProperties } from "react"
import { generations } from "../../data/generations"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { setGenerationFilter } from "../../redux/filterSlice"

const activeStyle: CSSProperties = { backgroundColor: "red", color: "white" }
const inativeStyle: CSSProperties = {
  backgroundColor: "lightgray",
  color: "grey",
}

const GenSelector = () => {
  const generationFilter = useAppSelector(
    (state) => state.filter.generationFilter
  )
  const dispatch = useAppDispatch()
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
      {generations.map((generation, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              dispatch(setGenerationFilter(generation))
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
