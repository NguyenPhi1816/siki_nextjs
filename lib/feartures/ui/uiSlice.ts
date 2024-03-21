import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const SCREEN_SM = 600;

export interface uiState {
  isMobileScreen: boolean;
  isStatesInitialized: boolean;
}

const initialState: uiState = {
  isMobileScreen: false,
  isStatesInitialized: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<boolean>) => {
      state.isMobileScreen = action.payload;
      state.isStatesInitialized = true;
    },
  },
  selectors: {
    selectIsMobileScreen: (ui) => ui.isMobileScreen,
    selectIsStatesInitialized: (ui) => ui.isStatesInitialized,
  },
});

// Action creators are generated for each case reducer function
export const { setScreen } = uiSlice.actions;

export const { selectIsMobileScreen, selectIsStatesInitialized } =
  uiSlice.selectors;

export default uiSlice.reducer;
