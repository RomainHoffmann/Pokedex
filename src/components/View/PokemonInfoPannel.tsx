import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { PokemonDetailed } from "../../redux/api/types"
import { CrossButton } from "../Shared/CrossButton"
import PokemonNumber from "../Shared/PokemonNumber"
import PokemonType from "../Shared/PokemonType"

type Props = {
  pokemonDetailed: PokemonDetailed
}

const PokemonInfoPannel = ({ pokemonDetailed }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div
      id="pokemon-info-pannel"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        height: "50%",
        color: "white",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div
        id="pokemon-info-pannel-header"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: "5rem",
          alignItems: "center",
          position: "relative",
        }}
      >
        <CrossButton
          left
          color="white"
          onClick={() => {
            navigate("/")
          }}
        ></CrossButton>
        <h2
          id="pokemon-info-pannel-header-name"
          style={{ textTransform: "capitalize", fontSize: "2rem" }}
        >
          {pokemonDetailed.info.name}
        </h2>
        <PokemonNumber index={pokemonDetailed.info.id} />
      </div>
      <img
        id="pokemon-info-pannel-image"
        style={{
          height: "260px",
        }}
        src={pokemonDetailed.info.image.officialArtwork}
      />
      <div id="pokemon-info-pannel-types">
        <div
          id="pokemon-info-pannel-types-container"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: "10px",
            height: "100%",
          }}
        >
          {pokemonDetailed.info.type.map((type, index) => (
            <PokemonType key={`type-${index}`} type={type}></PokemonType>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonInfoPannel
