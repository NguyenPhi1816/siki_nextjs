import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface uiState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isStatesInitialized: boolean;
}

const initialState: uiState = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isStatesInitialized: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setTablet: (state, action: PayloadAction<boolean>) => {
      state.isTablet = action.payload;
    },
    setDesktop: (state, action: PayloadAction<boolean>) => {
      state.isDesktop = action.payload;
    },
    setStatesInitialized: (state, action: PayloadAction<boolean>) => {
      state.isStatesInitialized = action.payload;
    },
  },
  selectors: {
    selectIsMobile: (ui) => ui.isMobile,
    selectIsTablet: (ui) => ui.isTablet,
    selectIsDesktop: (ui) => ui.isDesktop,
    selectIsStatesInitialized: (ui) => ui.isStatesInitialized,
  },
});

// Action creators are generated for each case reducer function
export const { setMobile, setTablet, setDesktop, setStatesInitialized } =
  uiSlice.actions;

export const {
  selectIsMobile,
  selectIsDesktop,
  selectIsTablet,
  selectIsStatesInitialized,
} = uiSlice.selectors;

export default uiSlice.reducer;
