import axios from "axios"

export const fetchPokemons = async (url: string) => {
  return await (
    await axios.get(url)
  ).data.results
}
