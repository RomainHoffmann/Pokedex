import React, { Dispatch, SetStateAction } from "react"
import { Generation } from "../data/generations"

interface PokemonFilterContextProps {
  searchFilter: string
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>
  generationFilter: Generation | undefined
  setGenerationFilter: React.Dispatch<
    React.SetStateAction<Generation | undefined>
  >
}

export const PokemonFilterContext =
  React.createContext<PokemonFilterContextProps>({
    searchFilter: "",
    setSearchFilter: () => {},
    generationFilter: undefined,
    setGenerationFilter: () => {},
  })

type Props = {
  searchFilter: string
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>
  children: React.ReactNode
  generationFilter: Generation | undefined
  setGenerationFilter: React.Dispatch<
    React.SetStateAction<Generation | undefined>
  >
}

export const PokemonFilterProvider = ({
  searchFilter,
  children,
  setSearchFilter,
  generationFilter,
  setGenerationFilter,
}: Props) => {
  return (
    <PokemonFilterContext.Provider
      value={{
        searchFilter,
        setSearchFilter,
        generationFilter,
        setGenerationFilter,
      }}
    >
      {children}
    </PokemonFilterContext.Provider>
  )
}

export const usePokemonFilter = () => React.useContext(PokemonFilterContext)
