import { configureStore } from "@reduxjs/toolkit"
import humanSizeReducer from "./humanSizeSlice"
import filterReducer from "./filterSlice"
import activePokemonReducer from "./activePokemonSlice"

const store = configureStore({
  reducer: {
    humanSize: humanSizeReducer,
    filter: filterReducer,
    activePokemon: activePokemonReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
