import { cartMiddleware } from "~/redux/middleware/cartMiddleware";
import { cartActions, CartItem } from "~/redux/slices/cart";
import { productsActions } from "~/redux/slices/products";
import { cartItemsLocalStorageKey } from "~/utils/constants";
import { LocalStorageMock } from "~/__tests__/LocalStorageMock";

const mockedLocalStorage = new LocalStorageMock();

Object.defineProperty(window, "localStorage", {
  value: mockedLocalStorage,
});

const mockedGetStoreState = jest.fn();

const mockedStore = {
  getState: mockedGetStoreState,
};

const cartItem: CartItem = {
  productId: 1,
  quantity: 1,
};

const expectedCartItems = [cartItem];

mockedGetStoreState.mockReturnValue({
  cart: {
    items: expectedCartItems,
  },
});

describe("redux cartMiddleware", () => {
  it("should ignore if action if it is not a cart action", () => {
    const mockedNext = jest.fn();
    const mockedLocalStorageSetItem = jest.spyOn(mockedLocalStorage, "setItem");

    const action = productsActions.setProducts({ products: [] });

    cartMiddleware(mockedStore as any)(mockedNext)(action);

    expect(mockedNext).toHaveBeenCalledWith(action);
    expect(mockedLocalStorageSetItem).not.toHaveBeenCalled();
  });

  it("should sync cart items with local storage on addItem action", () => {
    const mockedNext = jest.fn();
    const mockedLocalStorageSetItem = jest.spyOn(mockedLocalStorage, "setItem");

    const action = cartActions.addItem(cartItem);

    cartMiddleware(mockedStore as any)(mockedNext)(action);

    expect(mockedNext).toHaveBeenCalledWith(action);

    expect(mockedLocalStorageSetItem).toHaveBeenCalledWith(
      cartItemsLocalStorageKey,
      JSON.stringify(expectedCartItems),
    );
  });

  it("should sync cart items with local storage on removeItem action", () => {
    const mockedNext = jest.fn();
    const mockedLocalStorageSetItem = jest.spyOn(mockedLocalStorage, "setItem");

    const action = cartActions.removeItem({ productId: 1 });

    cartMiddleware(mockedStore as any)(mockedNext)(action);

    expect(mockedNext).toHaveBeenCalledWith(action);

    expect(mockedLocalStorageSetItem).toHaveBeenCalledWith(
      cartItemsLocalStorageKey,
      JSON.stringify(expectedCartItems),
    );
  });

  it("should sync cart items with local storage on updateItemQuantity action", () => {
    const mockedNext = jest.fn();
    const mockedLocalStorageSetItem = jest.spyOn(mockedLocalStorage, "setItem");

    const action = cartActions.updateItemQuantity({
      productId: 1,
      quantity: 2,
    });

    cartMiddleware(mockedStore as any)(mockedNext)(action);

    expect(mockedNext).toHaveBeenCalledWith(action);

    expect(mockedLocalStorageSetItem).toHaveBeenCalledWith(
      cartItemsLocalStorageKey,
      JSON.stringify(expectedCartItems),
    );
  });

  it("should sync cart items with local storage on clearItems action", () => {
    const mockedNext = jest.fn();
    const mockedLocalStorageSetItem = jest.spyOn(mockedLocalStorage, "setItem");

    const action = cartActions.clearItems();

    cartMiddleware(mockedStore as any)(mockedNext)(action);

    expect(mockedNext).toHaveBeenCalledWith(action);

    expect(mockedLocalStorageSetItem).toHaveBeenCalledWith(
      cartItemsLocalStorageKey,
      JSON.stringify(expectedCartItems),
    );
  });
});
