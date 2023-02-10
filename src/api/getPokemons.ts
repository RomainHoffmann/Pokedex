import pokeApi, { Pokemon } from "."
import { fetch } from "./fetch"

export const getPokemons = async (
  numeberOfResults?: number
): Promise<Pokemon[]> => {
  let url: string

  if (numeberOfResults) url = `${pokeApi.baseUrl}?limit=${numeberOfResults}}`
  else url = `${pokeApi.baseUrl}?limit=151`

  const pokemons = (await fetch(url)).results.map((result: any) => ({
    name: result.name,
    url: result.url,
  }))

  return pokemons
}
