import { LayoutGroup, motion } from "framer-motion"
import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { colours } from "../../data/typeColors"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import usePokemon from "../../hooks/usePokemon"
import { setActivePokemon } from "../../redux/activePokemonSlice"
import PokemonNumber from "../Shared/PokemonNumber"
import PokemonType from "../Shared/PokemonType"

type Props = {
  pokemonName: string
  index: number
  lastElementReference?: React.Ref<HTMLDivElement>
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

const PokemonCard = ({ pokemonName, lastElementReference }: Props) => {
  const dispatch = useAppDispatch()
  const { pokemon, loading, error } = usePokemon(pokemonName)
  const navigate = useNavigate()

  if (error) console.log(error)

  return (
    <>
      {pokemon && (
        <LayoutGroup id="card-swap-animation">
          <PokemonCardStyle
            ref={lastElementReference}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            id={`card-${pokemon.info.id}`}
            background={colours[pokemon.info.type[0]].background}
            layoutId={`card-${pokemon.info.id}`}
            onClick={() => {
              dispatch(setActivePokemon(pokemon))
              navigate(`/${pokemon.info.name}`)
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
                {pokemon.info.name}
              </h2>
              {pokemon && <PokemonNumber index={pokemon.info.id} />}
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
                src={pokemon.info.image.officialArtwork}
                alt={`Image of ${pokemon.info.name}`}
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
              {pokemon.info.type.map((type, index) => (
                <PokemonType key={`type-${index}`} type={type}></PokemonType>
              ))}
            </div>
          </PokemonCardStyle>
        </LayoutGroup>
      )}
    </>
  )
}

export default PokemonCard
