import { configureStore } from "@reduxjs/toolkit";
import { getInitialCartItems } from "~/utils/getInitialCartItems";
import { cartMiddleware } from "./middleware/cartMiddleware";
import { cartReducer, cartSliceName } from "./slices/cart";
import { productsReducer, productsSliceName } from "./slices/products";

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
