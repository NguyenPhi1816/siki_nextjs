import { Tuple, combineSlices, configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./feartures/ui/uiSlice";
import { productSlice } from "./feartures/product/productSlice";
import logger from "redux-logger";
import { categorySlice } from "./feartures/category/categorySlice";

const rootReducer = combineSlices(uiSlice, productSlice, categorySlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: () => new Tuple(logger),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
