import type { Middleware } from "@reduxjs/toolkit";
import { cartItemsLocalStorageKey } from "~/utils/constants";
import { cartSliceName, CartState } from "../slices/cart";
import type { ProductsState } from "../slices/products";

// usando RootState que vem da store causa cyclic dependency
interface RootState {
  products: ProductsState;
  cart: CartState;
}

export const cartMiddleware: Middleware<Record<string, unknown>, RootState> =
  store => next => action => {
    const result = next(action);

    if (action.type?.startsWith(`${cartSliceName}/`)) {
      const cartItemsState = store.getState().cart.items;

      localStorage.setItem(
        cartItemsLocalStorageKey,
        JSON.stringify(cartItemsState),
      );
    }

    return result;
  };
