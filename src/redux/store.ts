import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartSliceName } from "./slices/cart";
import { productsReducer, productsSliceName } from "./slices/products";

export const store = configureStore({
  reducer: {
    [productsSliceName]: productsReducer,
    [cartSliceName]: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
