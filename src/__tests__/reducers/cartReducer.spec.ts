import { ProductDTO } from "~/@types/DTOs/ProductDTO";
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

    const newItem: ProductDTO = {
      id: 1,
      name: "Fake Product",
      brand: "Apple",
      photo: "fake-photo",
      price: 2000,
      description: "Fake product description",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const newState = cartReducer(
      previousState,
      cartActions.addItem({
        product: newItem,
      }),
    );

    expect(newState).toEqual({ items: [{ product: newItem, quantity: 1 }] });
  });

  it("should be able to remove an item from cart and should remove only the requested item", () => {
    const cartItem: CartItem = {
      quantity: 1,
      product: {
        id: 1,
        name: "Fake Product",
        brand: "Apple",
        photo: "fake-photo",
        price: 2000,
        description: "Fake product description",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    const previousState: CartState = {
      items: [
        cartItem,
        {
          ...cartItem,
          product: {
            ...cartItem.product,
            id: 2,
          },
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
      product: {
        id: 1,
        name: "Fake Product",
        brand: "Apple",
        photo: "fake-photo",
        price: 2000,
        description: "Fake product description",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };

    const secondItem: CartItem = {
      quantity: 5,
      product: {
        id: 2,
        name: "Fake Product",
        brand: "Apple",
        photo: "fake-photo",
        price: 2000,
        description: "Fake product description",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
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
        product: {
          id: number,
          name: "Fake Product",
          brand: "Apple",
          photo: "fake-photo",
          price: 2000,
          description: "Fake product description",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      })),
    };

    const newState = cartReducer(previousState, cartActions.clearItems());

    expect(newState).toEqual({ items: [] });
  });
});
