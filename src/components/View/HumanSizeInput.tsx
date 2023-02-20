import { useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { setHumanSize } from "../../redux/humanSizeSlice"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { useGetPokemonInfoQuery } from "../../redux/api/api"
import { colours } from "../../data/typeColors"

const InputRange = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;

  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ color }) => color};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${({ color }) => color};
    cursor: pointer;
  }
`

const InputText = styled.input`
  text-align: center;
  border: 2px solid ${({ color }) => color};
  border-radius: 5px;
  height: 25px;
`

const HumanSizeInput = () => {
  const humanSize = useAppSelector((state) => state.humanSize.humanSize)
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState(humanSize)

  const location = useLocation()

  const { data: pokemonInfo } = useGetPokemonInfoQuery(
    location.pathname.split("/")[1]
  )

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "70%",
        height: "10%",
        justifyContent: "center",
        position: "absolute",
        bottom: "0%",
      }}
    >
      <InputRange
        type="range"
        max={220}
        min={100}
        onChange={(e) => {
          setInputValue(Number(e.target.value))
          dispatch(setHumanSize(Number(e.target.value)))
        }}
        value={humanSize}
        style={{ width: "90%" }}
        color={colours[pokemonInfo!.type[0]].type}
      ></InputRange>
      <InputText
        type="text"
        onChange={(e) => {
          setInputValue(Number(e.target.value))
        }}
        onBlur={() => {
          if (inputValue <= 220 && inputValue >= 100) {
            dispatch(setHumanSize(inputValue))
          } else {
            setInputValue(humanSize)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.currentTarget.blur()
          }
        }}
        value={inputValue}
        style={{ width: "10%", textAlign: "center" }}
        color={colours[pokemonInfo!.type[0]].type}
      />
    </div>
  )
}

export default HumanSizeInput
