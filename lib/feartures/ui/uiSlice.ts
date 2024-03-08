import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface uiState {
  isMobileScreen: boolean;
}

const initialState: uiState = {
  isMobileScreen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<boolean>) => {
      state.isMobileScreen = action.payload;
    },
  },
  selectors: {
    selectIsMobileScreen: (ui) => ui.isMobileScreen,
  },
});

// Action creators are generated for each case reducer function
export const { setScreen } = uiSlice.actions;

export const { selectIsMobileScreen } = uiSlice.selectors;

export default uiSlice.reducer;
