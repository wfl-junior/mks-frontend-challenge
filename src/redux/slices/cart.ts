import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { RootState } from "../store";

interface CartProduct {
  product: ProductDTO;
  quantity: number;
}

interface CartState {
  items: CartProduct[];
}

const initialState: CartState = {
  items: [],
};

type AddItemAction = PayloadAction<{ product: ProductDTO }>;
type RemoveItemAction = PayloadAction<{ productId: ProductDTO["id"] }>;
type UpdateItemQuantityAction = PayloadAction<{
  productId: ProductDTO["id"];
  quantity: number;
}>;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: AddItemAction) {
      state.items.push({
        product: action.payload.product,
        quantity: 1,
      });
    },
    removeItem(state, action: RemoveItemAction) {
      const index = state.items.findIndex(
        item => item.product.id === action.payload.productId,
      );

      delete state.items[index];
    },
    updateItemQuantity(state, action: UpdateItemQuantityAction) {
      const { productId, quantity } = action.payload;

      const index = state.items.findIndex(
        item => item.product.id === productId,
      );

      state.items[index].quantity = quantity;
    },
  },
});

export const cartSliceName = cartSlice.name;
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const selectCartItems = (state: RootState) => state.cart.items;