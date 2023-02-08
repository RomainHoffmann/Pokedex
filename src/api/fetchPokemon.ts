import axios from "axios"
import { Pokemon, PokemonSpeciesInfo, PokemonInfo } from "../hooks/usePokemon"

export const fetchPokemon = async (pathname: string) => {
  let pokemon: Pokemon
  let url = `https://pokeapi.co/api/v2/pokemon${pathname}/`

  const pokemonInfoReponse = await axios.get(url)
  const pokemonInfo: PokemonInfo = {
    name: pokemonInfoReponse.data.name,
    type: pokemonInfoReponse.data.types.map((type: any) => type.type.name),
    image: {
      minimal: pokemonInfoReponse.data.sprites.front_default,
      dreamWorld:
        pokemonInfoReponse.data.sprites.other["dream_world"].front_default,
      officialArtwork:
        pokemonInfoReponse.data.sprites.other["official-artwork"].front_default,
    },
    height: pokemonInfoReponse.data.height / 10,
    weight: pokemonInfoReponse.data.weight / 10,
    id: pokemonInfoReponse.data.id,
    baseStats: {
      hp: pokemonInfoReponse.data.stats[0].base_stat,
      attack: pokemonInfoReponse.data.stats[1].base_stat,
      defense: pokemonInfoReponse.data.stats[2].base_stat,
      specialAttack: pokemonInfoReponse.data.stats[3].base_stat,
      specialDefense: pokemonInfoReponse.data.stats[4].base_stat,
      speed: pokemonInfoReponse.data.stats[5].base_stat,
    },
  }

  const pokemonDetailResponse = await axios.get(
    pokemonInfoReponse.data.species.url
  )
  const pokemonSpeciesInfo: PokemonSpeciesInfo = {
    description: pokemonDetailResponse.data.flavor_text_entries.find(
      (entry: { language: { name: string } }) => entry.language.name === "en"
    ).flavor_text,
    isBaby: pokemonDetailResponse.data.is_baby,
    isLegendary: pokemonDetailResponse.data.is_legendary,
    isMythical: pokemonDetailResponse.data.is_mythical,
    shape: pokemonDetailResponse.data.shape.name,
    habitat: pokemonDetailResponse.data.habitat
      ? pokemonDetailResponse.data.habitat.name
      : "",
    eggGroup: pokemonDetailResponse.data.egg_groups.map(
      (group: { name: string }) => group.name
    ),
    growthRate: pokemonDetailResponse.data.growth_rate.name,
    hatchCounter: pokemonDetailResponse.data.hatch_counter,
    captureRate: pokemonDetailResponse.data.capture_rate,
    category: pokemonDetailResponse.data.genera.find(
      (genus: { language: { name: string }; genus: string }) =>
        genus.language.name === "en"
    ).genus,
  }

  pokemon = {
    info: pokemonInfo,
    speciesInfo: pokemonSpeciesInfo,
  }

  return pokemon
}
