import React, { Dispatch, SetStateAction } from "react"
import { Pokemon } from "../hooks/usePokemon"

export type Active = Pokemon | undefined

interface PokemonContextProps {
  activePokemon: Active
  setActivePokemon: React.Dispatch<React.SetStateAction<Active>>
}

export const PokemonContext = React.createContext<PokemonContextProps>({
  activePokemon: undefined,
  setActivePokemon: () => {},
})

type Props = {
  activePokemon: Active
  setActivePokemon: React.Dispatch<React.SetStateAction<Active>>
  children: React.ReactNode
}

export const PokemonProvider = ({
  activePokemon,
  children,
  setActivePokemon,
}: Props) => {
  return (
    <PokemonContext.Provider
      value={{
        activePokemon,
        setActivePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export const useActivePokemon = () => React.useContext(PokemonContext)
