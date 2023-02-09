import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getPokemon } from "../api/getPokemon"
import { setActivePokemon } from "../redux/activePokemonSlice"
import { useAppSelector } from "./useAppSelector"

export const useIsActiveMatchCurrentPathname = () => {
  const location = useLocation()
  const pathname = location.pathname
  const dispatch = useDispatch()
  const activePokemon = useAppSelector((state) => state.activePokemon.pokemon)

  useEffect(() => {
    ;(async () => {
      const pokemonName = pathname.split("/")[1]

      if (!activePokemon || activePokemon.info.name !== pokemonName) {
        const pokemon = await getPokemon(pokemonName)
        dispatch(setActivePokemon(pokemon))
      }
    })()
  }, [pathname])

  return location.pathname === pathname
}
