import { Checkout } from "@/types/checkout";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface checkoutState {
  items: Checkout[] | null;
}

const initialState: checkoutState = {
  items: null,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Checkout[]>) => {
      state.items = action.payload;
    },
    clearItems: (state) => {
      state.items = null;
    },
  },
  selectors: {
    selectItems: (checkout) => checkout.items,
  },
});

// Action creators are generated for each case reducer function
export const { setItems, clearItems } = checkoutSlice.actions;

export const { selectItems } = checkoutSlice.selectors;

export default checkoutSlice.reducer;
