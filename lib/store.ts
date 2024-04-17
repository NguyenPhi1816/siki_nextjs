import { Tuple, combineSlices, configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./feartures/ui/uiSlice";
import logger from "redux-logger";
import { productApi } from "./feartures/product/productSlice";
import { categoryApi } from "./feartures/category/categorySlice";
import { modalSlice } from "./feartures/modal/modalSlice";

const rootReducer = combineSlices(uiSlice, categoryApi, productApi, modalSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        productApi.middleware,
        categoryApi.middleware
      ),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
