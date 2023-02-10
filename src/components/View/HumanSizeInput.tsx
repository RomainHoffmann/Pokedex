import { useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { setHumanSize } from "../../redux/humanSizeSlice"

const HumanSizeInput = () => {
  const humanSize = useAppSelector((state) => state.humanSize.humanSize)
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState(humanSize)

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
      <input
        type="range"
        max={220}
        min={100}
        onChange={(e) => {
          setInputValue(Number(e.target.value))
          dispatch(setHumanSize(Number(e.target.value)))
        }}
        value={humanSize}
        style={{ width: "90%" }}
      />
      <input
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
      />
    </div>
  )
}

export default HumanSizeInput
