import React from "react"
import { useActivePokemon } from "../../context/activePokemon"
import { colours } from "../../data/typeColors"
import {
  convertCentimetersToMeter,
  kilogramWithUnit,
} from "../../helpers/convert"
import { padLeadingZeroes } from "../../helpers/padLeadingZeroes"
import PokemonNumber from "../Shared/PokemonNumber"
import PokemonType from "../Shared/PokemonType"

const PokemonInfoPannel = () => {
  const { activePokemon } = useActivePokemon()

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        height: "50%",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        <h2 style={{ textTransform: "capitalize", fontSize: "2rem" }}>
          {activePokemon?.info.name}
        </h2>
        <PokemonNumber index={activePokemon!.info.id} />
      </div>
      <img
        style={{
          height: "260px",
        }}
        src={activePokemon?.info.image.officialArtwork}
      />
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: "10px",
            height: "100%",
          }}
        >
          {activePokemon!.info?.type.map((type, index) => (
            <PokemonType key={`type-${index}`} type={type}></PokemonType>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonInfoPannel
