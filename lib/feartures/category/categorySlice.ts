import { ICategory } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface categoryState {
  category: ICategory[];
}

const initialState: categoryState = {
  category: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ICategory[]>) => {
      state.category = action.payload;
    },
  },
  selectors: {
    selectCategory: (category) => category.category,
  },
});

// Action creators are generated for each case reducer function
export const { setCategory } = categorySlice.actions;

export const { selectCategory } = categorySlice.selectors;

export default categorySlice.reducer;
