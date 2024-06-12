import { Tuple, combineSlices, configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./feartures/ui/uiSlice";
import logger from "redux-logger";
import { productApi } from "./feartures/product/productApi";
import { categoryApi } from "./feartures/category/categoryApi";
import { modalSlice } from "./feartures/modal/modalSlice";
import { reviewApi } from "./feartures/review/reviewApi";
import { advertisementApi } from "./feartures/advertisement/advertisementApi";
import { userApi } from "./feartures/user/userApi";
import { authApi } from "./feartures/auth/authApi";
import { authSlice } from "./feartures/auth/authSlice";
import { cartApi } from "./feartures/cart/cartApi";
import { userSlice } from "./feartures/user/userSlice";
import { orderApi } from "./feartures/order/orderApi";
import { checkoutSlice } from "./feartures/checkout/CheckoutSlice";

const rootReducer = combineSlices(
  uiSlice,
  modalSlice,
  authSlice,
  userSlice,
  checkoutSlice,
  categoryApi,
  productApi,
  reviewApi,
  advertisementApi,
  userApi,
  authApi,
  cartApi,
  orderApi
);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        productApi.middleware,
        categoryApi.middleware,
        reviewApi.middleware,
        advertisementApi.middleware,
        userApi.middleware,
        authApi.middleware,
        cartApi.middleware,
        orderApi.middleware
      ),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
