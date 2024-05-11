import { Tuple, combineSlices, configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./feartures/ui/uiSlice";
import logger from "redux-logger";
import { productApi } from "./feartures/product/productSlice";
import { categoryApi } from "./feartures/category/categorySlice";
import { modalSlice } from "./feartures/modal/modalSlice";
import { reviewApi } from "./feartures/review/reviewSlice";
import { advertisementApi } from "./feartures/advertisement/advertisementSlice";

const rootReducer = combineSlices(
  uiSlice,
  modalSlice,
  categoryApi,
  productApi,
  reviewApi,
  advertisementApi
);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        productApi.middleware,
        categoryApi.middleware,
        reviewApi.middleware,
        advertisementApi.middleware
      ),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
