import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface HumanSizeState {
  humanSize: number
}

const initialState: HumanSizeState = {
  humanSize: 175,
}

export const humanSizeSlice = createSlice({
  name: "humanSize",
  initialState,
  reducers: {
    setHumanSize: (state, action: PayloadAction<number>) => {
      state.humanSize = action.payload
    },
  },
})

export const { setHumanSize } = humanSizeSlice.actions

export default humanSizeSlice.reducer
