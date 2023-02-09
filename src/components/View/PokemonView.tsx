import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getPokemon } from "../../api/getPokemon"
import { colours } from "../../data/typeColors"
import PokemonInfoPannel from "./PokemonInfoPannel"
import ViewTab from "./Tabs/ViewTab"
import styled from "styled-components"
import { hexToRgb } from "../../helpers/hexToRgb"
import { LayoutGroup, motion } from "framer-motion"
import Spinner from "../Shared/Spinner"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setActivePokemon } from "../../redux/activePokemonSlice"
import { useDisableScroll } from "../../hooks/useDisableScroll"
import { useIsActiveMatchCurrentPathname } from "../../hooks/useIsActiveMatchCurrentPathname"

const PokemonViewContainer = styled.div`
  height: 100%;
  width: 100vw;
  // background-color: rgb(0, 0, 0, 0.5);
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

const CloseButton = styled.div`
  position: absolute;
  padding: 1rem;
  cursor: pointer;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: absolute;
    height: 0.2rem;
    width: 100%;
    background-color: rgb(255, 255, 255);
  }

  #span-1 {
    transform: rotate(45deg);
  }

  #span-2 {
    transform: rotate(-45deg);
  }
`

const PokemonView = () => {
  const { pathname } = useLocation()
  const activePokemon = useAppSelector((state) => state.activePokemon.pokemon)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  useDisableScroll()
  useIsActiveMatchCurrentPathname()

  return (
    <>
      {activePokemon && (
        <PokemonViewContainer
          background={colours[activePokemon.info.type[0]].background}
          onClick={(e) => {
            navigate("/")
          }}
        >
          <LayoutGroup id="card-swap-animation">
            <PokemonViewStyle
              layoutId={`card-${activePokemon.info.id}`}
              id="pokemon-view"
              background={colours[activePokemon.info.type[0]].background}
              onClick={(e) => {
                e.stopPropagation()
              }}
            >
              <CloseButton
                style={{ position: "absolute" }}
                onClick={() => {
                  dispatch(setActivePokemon(undefined))
                  navigate("/")
                }}
              >
                <span id="span-1"></span>
                <span id="span-2"></span>
              </CloseButton>
              <PokemonInfoPannel></PokemonInfoPannel>
              <ViewTab></ViewTab>
            </PokemonViewStyle>
          </LayoutGroup>
        </PokemonViewContainer>
      )}
    </>
  )
}

export default PokemonView
