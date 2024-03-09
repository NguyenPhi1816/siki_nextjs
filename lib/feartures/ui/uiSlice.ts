import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const SCREEN_SM = 600;

export interface uiState {
  isMobileScreen: boolean;
}

const initialState: uiState = {
  isMobileScreen: screen.width < SCREEN_SM,
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
