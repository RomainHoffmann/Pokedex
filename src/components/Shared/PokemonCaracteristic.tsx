type Props = {
  label: string
  value: number | boolean | string | undefined
}

const PokemonCaracteristic = ({ label, value }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <span style={{ fontWeight: "bold", width: "120px" }}>{`${label} `}</span>
      <span style={{ textTransform: "capitalize" }}>{value}</span>
    </div>
  )
}

export default PokemonCaracteristic
