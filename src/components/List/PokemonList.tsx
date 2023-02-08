import React from "react"
import { useState } from "react"
import {
  PokemonFilterProvider,
  usePokemonFilter,
} from "../../context/pokemonFilter"
import { Generation } from "../../data/generations"
import usePokemons from "../../hooks/usePokemons"
import Filter from "../Filters/Filter"
import PokemonCard from "./PokemonCard"

const PokemonList = () => {
  const { pokemons } = usePokemons()
  const [searchFilter, setSearchFilter] = useState<string>("")
  const [generationFiler, setGenerationFilter] = useState<
    Generation | undefined
  >(undefined)

  console.log("rendering PokemonList")
  return (
    <>
      <PokemonFilterProvider
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        setGenerationFilter={setGenerationFilter}
        generationFilter={generationFiler}
      >
        <Filter></Filter>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              margin: 0,
              maxWidth: "60vw",
            }}
          >
            {pokemons.map((pokemon, index) => {
              if (pokemon.name.includes(searchFilter)) {
                return (
                  <PokemonCard
                    key={`pokemon-${index}`}
                    index={index + 1}
                    pokemon={pokemon}
                  ></PokemonCard>
                )
              }
            })}
          </div>
        </div>
      </PokemonFilterProvider>
    </>
  )
}

export default PokemonList
