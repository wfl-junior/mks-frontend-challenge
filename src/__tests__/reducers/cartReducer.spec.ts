import {
  cartActions,
  CartItem,
  cartReducer,
  CartState,
} from "~/redux/slices/cart";

describe("cartReducer", () => {
  it("should be able to add an item to cart", () => {
    const previousState: CartState = {
      items: [],
    };

    const newState = cartReducer(
      previousState,
      cartActions.addItem({
        productId: 1,
      }),
    );

    expect(newState).toEqual({ items: [{ productId: 1, quantity: 1 }] });
  });

  it("should be able to remove an item from cart and should remove only the requested item", () => {
    const cartItem: CartItem = {
      quantity: 1,
      productId: 1,
    };

    const previousState: CartState = {
      items: [
        cartItem,
        {
          quantity: 2,
          productId: 2,
        },
      ],
    };

    const newState = cartReducer(
      previousState,
      cartActions.removeItem({
        productId: 2,
      }),
    );

    expect(newState).toEqual({ items: [cartItem] });
  });

  it("should be able to update an item quantity and update only the requested item", () => {
    const firstItem: CartItem = {
      quantity: 1,
      productId: 1,
    };

    const secondItem: CartItem = {
      quantity: 5,
      productId: 2,
    };

    const previousState: CartState = {
      items: [firstItem, secondItem],
    };

    const newState = cartReducer(
      previousState,
      cartActions.updateItemQuantity({
        productId: 2,
        quantity: 3,
      }),
    );

    expect(newState).toEqual({
      items: [
        firstItem,
        {
          ...secondItem,
          quantity: 3,
        },
      ],
    });
  });

  it("should be able to clear cart items", () => {
    const previousState: CartState = {
      items: Array.from({ length: 5 }, (_, i) => i + 1).map(number => ({
        quantity: number,
        productId: number,
      })),
    };

    const newState = cartReducer(previousState, cartActions.clearItems());

    expect(newState).toEqual({ items: [] });
  });
});
