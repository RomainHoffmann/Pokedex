import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { PokemonDetailed } from "../api"

export type Active = PokemonDetailed | undefined

export interface ActivePokemonState {
  pokemon: Active
}

const initialState: ActivePokemonState = {
  pokemon: undefined,
}

export const activePokemonSlice = createSlice({
  name: "activePokemon",
  initialState,
  reducers: {
    setActivePokemon: (state, action: PayloadAction<Active>) => {
      state.pokemon = action.payload
    },
  },
})

export const { setActivePokemon } = activePokemonSlice.actions

export default activePokemonSlice.reducer
