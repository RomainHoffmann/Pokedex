import { PokemonDetailed, PokemonInfo, PokemonSpeciesInfo } from "."
import pokeApi from "./"
import { fetch } from "./fetch"

export const getPokemon = async (name: string) => {
  let pokemon: PokemonDetailed
  let url = `${pokeApi.baseUrl}/${name}/`

  const pokemonInfoReponse = await fetch(url)

  const pokemonInfo: PokemonInfo = {
    name: pokemonInfoReponse.name,
    type: pokemonInfoReponse.types.map((type: any) => type.type.name),
    image: {
      minimal: pokemonInfoReponse.sprites.front_default,
      dreamWorld: pokemonInfoReponse.sprites.other["dream_world"].front_default,
      officialArtwork:
        pokemonInfoReponse.sprites.other["official-artwork"].front_default,
    },
    height: pokemonInfoReponse.height / 10,
    weight: pokemonInfoReponse.weight / 10,
    id: pokemonInfoReponse.id,
    baseStats: {
      hp: pokemonInfoReponse.stats[0].base_stat,
      attack: pokemonInfoReponse.stats[1].base_stat,
      defense: pokemonInfoReponse.stats[2].base_stat,
      specialAttack: pokemonInfoReponse.stats[3].base_stat,
      specialDefense: pokemonInfoReponse.stats[4].base_stat,
      speed: pokemonInfoReponse.stats[5].base_stat,
    },
  }

  const pokemonDetailResponse = await fetch(pokemonInfoReponse.species.url)
  const pokemonSpeciesInfo: PokemonSpeciesInfo = {
    description: pokemonDetailResponse.flavor_text_entries.find(
      (entry: { language: { name: string } }) => entry.language.name === "en"
    ).flavor_text,
    isBaby: pokemonDetailResponse.is_baby,
    isLegendary: pokemonDetailResponse.is_legendary,
    isMythical: pokemonDetailResponse.is_mythical,
    shape: pokemonDetailResponse.shape.name,
    habitat: pokemonDetailResponse.habitat
      ? pokemonDetailResponse.habitat.name
      : "",
    eggGroup: pokemonDetailResponse.egg_groups.map(
      (group: { name: string }) => group.name
    ),
    growthRate: pokemonDetailResponse.growth_rate.name,
    hatchCounter: pokemonDetailResponse.hatch_counter,
    captureRate: pokemonDetailResponse.capture_rate,
    category: pokemonDetailResponse.genera.find(
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
