type Props = {
  image: string
  size: number
}

const PokemonImage = ({ image, size }: Props) => {
  return <img src={image} style={{ height: `${size}%` }} alt="dd" />
}

export default PokemonImage
