import { CartItem } from "~/redux/slices/cart";
import { cartItemsLocalStorageKey } from "~/utils/constants";
import { getInitialCartItems } from "~/utils/getInitialCartItems";
import { LocalStorageMock } from "../LocalStorageMock";

const mockedLocalStorage = new LocalStorageMock();

Object.defineProperty(window, "localStorage", {
  value: mockedLocalStorage,
});

describe("getInitialCartItems util", () => {
  const { window } = global;

  afterEach(() => {
    global.window = window;
  });

  it("should return an empty array if storage for cart items key has not been initialized yet", () => {
    mockedLocalStorage.removeItem(cartItemsLocalStorageKey);

    expect(getInitialCartItems()).toEqual([]);
  });

  it("should return an empty array if window is not defined", () => {
    const cartItem: CartItem = {
      productId: 1,
      quantity: 1,
    };

    mockedLocalStorage.setItem(
      cartItemsLocalStorageKey,
      JSON.stringify([cartItem]),
    );

    delete (global as any).window;

    expect(getInitialCartItems()).toEqual([]);
  });

  it("should return cart items from local storage", () => {
    const cartItem: CartItem = {
      productId: 1,
      quantity: 1,
    };

    const expectedCartItems = [cartItem];

    mockedLocalStorage.setItem(
      cartItemsLocalStorageKey,
      JSON.stringify(expectedCartItems),
    );

    expect(getInitialCartItems()).toEqual(expectedCartItems);
  });
});
