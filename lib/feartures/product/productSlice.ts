import { IProduct, IProductLabel } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface productState {
  product: IProduct[];
  productLabel: IProductLabel[];
  appleCategory: IProduct[];
  samsungCategory: IProduct[];
  xiaomiCategory: IProduct[];
  oppoCategory: IProduct[];
}

const initialState: productState = {
  product: [],
  productLabel: [],
  appleCategory: [],
  samsungCategory: [],
  xiaomiCategory: [],
  oppoCategory: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.product = action.payload;
    },
    setProductLabel: (state, action: PayloadAction<IProductLabel[]>) => {
      state.productLabel = action.payload;
    },
    setAppleCategory: (state, action: PayloadAction<IProduct[]>) => {
      state.appleCategory = action.payload;
    },
    setSamsungCategory: (state, action: PayloadAction<IProduct[]>) => {
      state.samsungCategory = action.payload;
    },
    setXiaomiCategory: (state, action: PayloadAction<IProduct[]>) => {
      state.xiaomiCategory = action.payload;
    },
    setOppoCategory: (state, action: PayloadAction<IProduct[]>) => {
      state.oppoCategory = action.payload;
    },
  },
  selectors: {
    selectProduct: (product) => product.product,
    selectProductLabel: (product) => product.productLabel,
    selectAppleCategory: (product) => product.appleCategory,
    selectSamsungCategory: (product) => product.samsungCategory,
    selectXiaomiCategory: (product) => product.xiaomiCategory,
    selectOppoCategory: (product) => product.oppoCategory,
  },
});

// Action creators are generated for each case reducer function
export const {
  setProduct,
  setProductLabel,
  setAppleCategory,
  setOppoCategory,
  setSamsungCategory,
  setXiaomiCategory,
} = productSlice.actions;

export const {
  selectProduct,
  selectProductLabel,
  selectAppleCategory,
  selectOppoCategory,
  selectSamsungCategory,
  selectXiaomiCategory,
} = productSlice.selectors;

export default productSlice.reducer;
