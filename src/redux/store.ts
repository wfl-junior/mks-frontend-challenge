import { configureStore } from "@reduxjs/toolkit";
import { cartItemsLocalStorageKey } from "~/utils/constants";
import { cartMiddleware } from "./middleware/cartMiddleware";
import { CartItem, cartReducer, cartSliceName } from "./slices/cart";
import { productsReducer, productsSliceName } from "./slices/products";

function getInitialCartItems(): CartItem[] {
  // se estiver em ssr
  if (typeof window === "undefined") {
    return [];
  }

  const existingCartItems = localStorage.getItem(cartItemsLocalStorageKey);

  if (existingCartItems) {
    return JSON.parse(existingCartItems);
  }

  return [];
}

export const store = configureStore({
  reducer: {
    [productsSliceName]: productsReducer,
    [cartSliceName]: cartReducer,
  },
  preloadedState: {
    cart: {
      items: getInitialCartItems(),
    },
  },
  middleware: getDefultMiddleware => {
    return getDefultMiddleware().concat(cartMiddleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
