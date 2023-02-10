import human from "/human.png"

type Props = {
  size: number
}

const HumanImage = ({ size }: Props) => {
  return (
    <img
      src={human}
      style={{
        height: `${size}%`,
        display: "block",
      }}
      alt="human"
    />
  )
}

export default HumanImage
