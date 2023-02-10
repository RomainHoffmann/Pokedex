import { configureStore } from "@reduxjs/toolkit"
import humanSizeReducer from "./humanSizeSlice"
import filterReducer from "./filterSlice"
import { pokemonApi } from "./api/api"

const store = configureStore({
  reducer: {
    humanSize: humanSizeReducer,
    filter: filterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
