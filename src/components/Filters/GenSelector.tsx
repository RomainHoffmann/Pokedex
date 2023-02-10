import { CSSProperties } from "react"
import { generations } from "../../data/generations"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { setGenerationFilter } from "../../redux/filterSlice"
import styled from "styled-components"

const GenSelectorButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  outline: none;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  background-color: lightgray;
  color: white;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  width: 3rem;

  ${({ active }: { active: boolean }) => {
    if (active) {
      return `
        background-color: red;
        color: white;

        &:hover {
          background-color: rgb(200, 0, 0);
        }

      `
    } else {
      return `
        background-color: lightgray;
        color: gray;

        &:hover {
          background-color: gray;
          color: white;
        }
      `
    }
  }}
`

const GenSelector = () => {
  const generationFilter = useAppSelector(
    (state) => state.filter.generationFilter
  )
  const dispatch = useAppDispatch()
  return (
    <div
      id="gen-selector-container"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
        width: "60%",
      }}
    >
      {generations.map((generation, index) => {
        return (
          <GenSelectorButton
            active={
              generationFilter && generationFilter.number === generation.number
                ? true
                : false
            }
            id={`gen-${generation.number}-button`}
            key={`gen-${generation.number}-button`}
            onClick={() => {
              dispatch(setGenerationFilter(generation))
            }}
          >
            {generation.number}
          </GenSelectorButton>
        )
      })}
    </div>
  )
}

export default GenSelector
