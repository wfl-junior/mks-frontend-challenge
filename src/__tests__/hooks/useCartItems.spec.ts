import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCartItems } from "~/hooks/useCartItems";
import { useDispatch } from "~/redux/hooks";
import { cartActions, CartItem } from "~/redux/slices/cart";
import { TestWrapperComponent } from "../TestWrapperComponent";

describe("useCartItems hook", () => {
  it("should return cart items from store", () => {
    const { result } = renderHook(useCartItems, {
      wrapper: TestWrapperComponent,
    });

    const {
      result: { current: dispatch },
    } = renderHook(useDispatch, {
      wrapper: TestWrapperComponent,
    });

    const fakeCartItem: CartItem = {
      productId: 1,
      quantity: 1,
    };

    expect(result.current).toEqual([]);

    act(() => {
      dispatch(cartActions.addItem(fakeCartItem));
    });

    expect(result.current).toEqual([fakeCartItem]);
  });
});
