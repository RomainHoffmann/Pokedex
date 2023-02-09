import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Generation } from "../data/generations"

export interface FilterState {
  searchTextFilter: string
  generationFilter: Generation | undefined
}

const initialState: FilterState = {
  searchTextFilter: "",
  generationFilter: undefined,
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setSearchTextFilter: (state, action: PayloadAction<string>) => {
      state.searchTextFilter = action.payload
    },
    setGenerationFilter: (
      state,
      action: PayloadAction<Generation | undefined>
    ) => {
      state.generationFilter = action.payload
    },
  },
})

export const { setSearchTextFilter } = filterSlice.actions

export default filterSlice.reducer
