import { useEffect, useState } from "react"

const ProgressBar = ({
  value,
  label,
  color,
}: {
  value: number
  label: string
  color: string
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < value) {
        setProgress((prev) => prev + 1)
      } else {
        clearInterval(interval)
      }
    }, 1)
    return () => clearInterval(interval)
  }, [progress])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "0.5rem",
      }}
    >
      <span style={{ width: "40%", fontWeight: "600" }}>{label}</span>
      <span style={{ width: "10%" }}>{value}</span>
      <div
        style={{
          height: "10px",
          width: "100%",
          backgroundColor: "rgb(230,230,230)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(progress * 100) / 255}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
