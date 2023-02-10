import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Pokemon, PokemonInfo, PokemonSpeciesInfo } from "./types"

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<Pokemon[], { limit: number; offset: number }>(
      {
        query: ({ limit, offset }) => {
          return `pokemon?limit=${limit}&offset=${offset}`
        },
        transformResponse: (raw: { results: Pokemon[] }) => {
          return raw.results
        },
      }
    ),
    getPokemonInfo: builder.query<PokemonInfo, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (raw: any) => {
        const pokemonInfo: PokemonInfo = {
          name: raw.name,
          type: raw.types.map((type: any) => type.type.name),
          image: {
            minimal: raw.sprites.front_default,
            dreamWorld: raw.sprites.other["dream_world"].front_default,
            officialArtwork:
              raw.sprites.other["official-artwork"].front_default,
          },
          height: raw.height * 10,
          weight: raw.weight / 10,
          id: raw.id,
          baseStats: {
            hp: raw.stats[0].base_stat,
            attack: raw.stats[1].base_stat,
            defense: raw.stats[2].base_stat,
            specialAttack: raw.stats[3].base_stat,
            specialDefense: raw.stats[4].base_stat,
            speed: raw.stats[5].base_stat,
          },
        }

        return pokemonInfo
      },
    }),
    getPokemonSpeciesInfo: builder.query<PokemonSpeciesInfo, string>({
      query: (name: string) => `pokemon-species/${name}`,
      transformResponse: (raw: any) => {
        const pokemonSpeciesInfo: PokemonSpeciesInfo = {
          description: raw.flavor_text_entries.find(
            (entry: { language: { name: string } }) =>
              entry.language.name === "en"
          ).flavor_text,
          isBaby: raw.is_baby,
          isLegendary: raw.is_legendary,
          isMythical: raw.is_mythical,
          shape: raw.shape.name,
          habitat: raw.habitat ? raw.habitat.name : "",
          eggGroup: raw.egg_groups.map((group: { name: string }) => group.name),
          growthRate: raw.growth_rate.name,
          hatchCounter: raw.hatch_counter,
          captureRate: raw.capture_rate,
          category: raw.genera.find(
            (genus: { language: { name: string }; genus: string }) =>
              genus.language.name === "en"
          ).genus,
        }
        return pokemonSpeciesInfo
      },
    }),
  }),
})

export const {
  useGetPokemonListQuery,
  useGetPokemonInfoQuery,
  useGetPokemonSpeciesInfoQuery,
} = pokemonApi
