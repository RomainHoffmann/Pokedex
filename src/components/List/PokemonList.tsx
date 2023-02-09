import React from "react"
import { useState } from "react"
import { Generation } from "../../data/generations"
import { useAppSelector } from "../../hooks/useAppSelector"
import usePokemons from "../../hooks/usePokemons"
import Filter from "../Filters/Filter"
import PokemonCard from "./PokemonCard"

const PokemonList = () => {
  const { pokemons } = usePokemons()
  const searchTextFilter = useAppSelector(
    (state) => state.filter.searchTextFilter
  )

  return (
    <>
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
            if (pokemon.name.includes(searchTextFilter)) {
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
    </>
  )
}

export default PokemonList
