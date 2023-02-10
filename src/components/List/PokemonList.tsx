import { clamp } from "framer-motion"
import { useCallback, useRef, useState } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useGetPokemonListQuery } from "../../redux/api/api"
import Filter from "../Filters/Filter"
import Loader from "../Shared/Loader"
import PokemonCard from "./PokemonCard"

const PokemonList = () => {
  const [displayedResults, setDisplayedResults] = useState(9)
  const { generationFilter } = useAppSelector((state) => state.filter)
  const { data, isLoading } = useGetPokemonListQuery({
    limit: displayedResults,
    offset: generationFilter ? generationFilter.limit.from : 0,
  })
  const searchTextFilter = useAppSelector(
    (state) => state.filter.searchTextFilter
  )

  const observer = useRef<IntersectionObserver>()
  const lastPokemonElementRef = useCallback(
    (node: any) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setDisplayedResults((prevNumber) => prevNumber + 9)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading]
  )

  return (
    <section>
      <Filter></Filter>
      {data && (
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
              maxWidth: "1200px",
            }}
          >
            {data.map((pokemon, index) => {
              if (pokemon.name.includes(searchTextFilter)) {
                return (
                  <PokemonCard
                    key={`pokemon-${pokemon.name}`}
                    index={index + 1}
                    pokemonName={pokemon.name}
                    lastElementReference={
                      data.length === index + 1
                        ? lastPokemonElementRef
                        : undefined
                    }
                  ></PokemonCard>
                )
              }
            })}
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </section>
  )
}

export default PokemonList
