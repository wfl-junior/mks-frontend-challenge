import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import type { RootState } from "../store";

export interface ProductsState {
  products: ProductDTO[] | null;
}

const initialState: ProductsState = {
  products: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductsState>) {
      state.products = action.payload.products;
    },
  },
});

export const productsSliceName = productsSlice.name;
export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
export const selectProducts = (state: RootState) => state.products.products;
