import { CSSProperties, useEffect, useState } from "react"

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [music, setMusic] = useState(new Audio("./music.mp3"))
  const defaultStyle = {
    scale: 1,
    backgroundColor: "white",
  }
  const [styles, setStyles] = useState<CSSProperties>(defaultStyle)

  const handleClick = () => {
    setStyles({
      backgroundColor: "rgba(255, 0, 0, 0.2)",
    })
    if (!isPlaying) {
      music.play()
      setIsPlaying(true)
    } else {
      music.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1,
        backgroundColor: `${styles.backgroundColor}`,
        width: 50,
        height: 50,
        borderRadius: "50%",
        outline: "2px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 10px 2px red",
        gap: 3,
        cursor: "pointer",
        transition: "scale .1s, background-color .1s",
        scale: `${styles.scale}`,
      }}
      onClick={handleClick}
      onMouseEnter={() => {
        setStyles({
          scale: 1.1,
        })
      }}
      onMouseLeave={() => {
        setStyles(defaultStyle)
      }}
    >
      <SpeakerBar size="normal" isPlaying={isPlaying} />
      <SpeakerBar size="large" isPlaying={isPlaying} />
      <SpeakerBar size="normal" isPlaying={isPlaying} />
    </div>
  )
}

const SpeakerBar = ({
  size,
  isPlaying,
}: {
  size: "normal" | "large"
  isPlaying: boolean
}) => {
  const defaultStyle = {
    scale: 1,
  }
  const [styles, setStyles] = useState<CSSProperties>(defaultStyle)

  useEffect(() => {
    if (isPlaying) {
      setTimeout(() => {
        setStyles((style) =>
          style.scale === 1 ? { scale: 0.8 } : { scale: 1 }
        )
      }, 100)
    }
  }, [isPlaying])

  return (
    <div
      style={{
        width: "15%",
        height: size === "normal" ? "30%" : "50%",
        backgroundColor: "red",
        scale: `${styles.scale}`,
      }}
    ></div>
  )
}

export default Sound
