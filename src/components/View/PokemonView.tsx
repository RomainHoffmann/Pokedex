import { LayoutGroup, motion } from "framer-motion"
import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { colours } from "../../data/typeColors"
import { hexToRgb } from "../../helpers/hexToRgb"
import { useDisableScroll } from "../../hooks/useDisableScroll"
import {
  useGetPokemonInfoQuery,
  useGetPokemonSpeciesInfoQuery,
} from "../../redux/api/api"
import PokemonInfoPannel from "./PokemonInfoPannel"
import ViewTab from "./Tabs/ViewTab"

const PokemonViewContainer = styled.div`
  height: 100%;
  width: 100vw;
  background-color: ${(props: { background: string }) =>
    hexToRgb(props.background, 0.5)};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PokemonViewStyle = styled(motion.div)`
  background-color: ${(props: { background: string }) => props.background};
  height: 100%;
  width: 100%;
  min-height: 680px;
  max-width: 600px;
  max-height: 800px;
  overflow: hidden;
  opacity: 1;

  @media (min-width: 600px) {
    border-radius: 2rem;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 600px) {
    max-height: 100vh;
  }
`

const PokemonView = () => {
  console.log("PokemonView")

  const navigate = useNavigate()

  useDisableScroll()

  const location = useLocation()

  const { data: pokemonInfo } = useGetPokemonInfoQuery(
    location.pathname.split("/")[1]
  )
  const { data: pokemonSpeciesInfo } = useGetPokemonSpeciesInfoQuery(
    location.pathname.split("/")[1]
  )

  console.log(pokemonInfo.name)
  return (
    <>
      <PokemonViewContainer
        id="pokemon-view-container"
        background={colours[pokemonInfo!.type[0]].background}
        onClick={(e) => {
          navigate("/")
        }}
      >
        <LayoutGroup id="card-swap-animation">
          <PokemonViewStyle
            layoutId={`card-${pokemonInfo.name}`}
            id="pokemon-view"
            background={colours[pokemonInfo!.type[0]].background}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {/* <PokemonInfoPannel
              pokemonDetailed={{
                info: pokemonInfo!,
                speciesInfo: pokemonSpeciesInfo!,
              }}
            ></PokemonInfoPannel>
            <ViewTab
              pokemonDetailed={{
                info: pokemonInfo!,
                speciesInfo: pokemonSpeciesInfo!,
              }}
            ></ViewTab> */}
          </PokemonViewStyle>
        </LayoutGroup>
      </PokemonViewContainer>
    </>
  )
}

export default PokemonView
