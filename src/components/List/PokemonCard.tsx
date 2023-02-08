import { LayoutGroup, motion } from "framer-motion"
import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useActivePokemon } from "../../context/activePokemon"
import { colours } from "../../data/typeColors"
import usePokemon from "../../hooks/usePokemon"
import { Pokemon } from "../../hooks/usePokemons"
import PokemonNumber from "../Shared/PokemonNumber"
import PokemonType from "../Shared/PokemonType"
import Spinner from "../Shared/Spinner"

type Props = {
  pokemon: Pokemon
  index: number
}

const PokemonCardStyle = styled(motion.div)`
  background-color: ${(props: { background: string }) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`

const PokemonCard = ({ pokemon, index }: Props) => {
  const { setActivePokemon } = useActivePokemon()
  const { pokemon: pokemonDetailed } = usePokemon(`/${pokemon.name}`)
  const navigate = useNavigate()

  if (!pokemonDetailed) return <Spinner></Spinner>

  console.log(`RENDER CARD ${pokemon.name}`)

  return (
    <LayoutGroup id="card-swap-animation">
      <PokemonCardStyle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        id={`card-${pokemonDetailed.info.id}`}
        background={colours[pokemonDetailed.info.type[0]].background}
        layoutId={`card-${pokemonDetailed.info.id}`}
        onClick={() => {
          navigate(`/${pokemon.name}`)
          setActivePokemon(pokemonDetailed)
        }}
        whileHover={{
          scale: 1.05,
        }}
      >
        <div
          id="card-header"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10,
            textTransform: "capitalize",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <h2
            id="card-header-name"
            style={{
              fontSize: "1.5rem",
              textShadow: "0px 0px 15px rgba(0,0,0,.6)",
            }}
          >
            {pokemon.name}
          </h2>
          {pokemonDetailed && <PokemonNumber index={pokemonDetailed.info.id} />}
        </div>
        <div
          id="card-content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            id="card-content-image"
            src={pokemonDetailed.info.image.officialArtwork}
            alt={`Image of ${pokemon.name}`}
            style={{ width: "70%" }}
          />
        </div>
        <div
          id="card-footer"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            padding: 10,
          }}
        >
          {pokemonDetailed?.info.type.map((type, index) => (
            <PokemonType key={`type-${index}`} type={type}></PokemonType>
          ))}
        </div>
      </PokemonCardStyle>
    </LayoutGroup>
  )
}

export default PokemonCard
