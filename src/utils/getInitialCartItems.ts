import type { CartItem } from "~/redux/slices/cart";
import { cartItemsLocalStorageKey } from "./constants";

export function getInitialCartItems(): CartItem[] {
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
