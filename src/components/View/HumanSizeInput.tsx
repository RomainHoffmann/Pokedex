import { useState } from "react"
import { useHumanSize } from "../../context/humanSize"

const HumanSizeInput = () => {
  const { humanSize, setHumanSize } = useHumanSize()
  const [inputValue, setInputValue] = useState<number>(humanSize)

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
          setHumanSize(Number(e.target.value))
          setInputValue(Number(e.target.value))
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
            setHumanSize(inputValue)
          } else {
            setInputValue(humanSize)
          }
        }}
        value={inputValue}
        style={{ width: "10%", textAlign: "center" }}
      />
    </div>
  )
}

export default HumanSizeInput
