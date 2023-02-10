import { useCallback, useRef, useState } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import usePokemons from "../../hooks/usePokemons"
import Filter from "../Filters/Filter"
import Loader from "../Shared/Loader"
import PokemonCard from "./PokemonCard"

const PokemonList = () => {
  const [displayedNumber, setDisplayedNumber] = useState(9)
  const { pokemons, error, loading } = usePokemons(displayedNumber)
  const searchTextFilter = useAppSelector(
    (state) => state.filter.searchTextFilter
  )

  const observer = useRef<IntersectionObserver>()
  const lastPokemonElementRef = useCallback(
    (node: any) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setDisplayedNumber((prevNumber) => prevNumber + 9)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading]
  )

  if (error) console.log(error)

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
                  pokemonName={pokemon.name}
                  lastElementReference={
                    pokemons.length === index + 1
                      ? lastPokemonElementRef
                      : undefined
                  }
                ></PokemonCard>
              )
            }
          })}
        </div>
      </div>
      {loading && <Loader />}
    </>
  )
}

export default PokemonList
