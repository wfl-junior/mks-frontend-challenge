import { act, renderHook } from "@testing-library/react";
import {
  CartDrawerContextProvider,
  useCartDrawerContext,
} from "~/contexts/CartDrawerContext";

describe("useCartDrawerContext hook", () => {
  it("should return correct data", () => {
    const { result } = renderHook(useCartDrawerContext, {
      wrapper: CartDrawerContextProvider,
    });

    expect(result.current.isOpen).toBeDefined();
    expect(result.current.isOpen).toBe(false);

    expect(result.current.open).toBeDefined();
    expect(typeof result.current.open).toBe("function");

    expect(result.current.close).toBeDefined();
    expect(typeof result.current.close).toBe("function");
  });

  it("should change isOpen to true when open is called", () => {
    const { result } = renderHook(useCartDrawerContext, {
      wrapper: CartDrawerContextProvider,
    });

    expect(result.current.isOpen).toBe(false);

    act(() => result.current.open());

    expect(result.current.isOpen).toBe(true);
  });

  it("should change isOpen to false when close is called", () => {
    const { result } = renderHook(useCartDrawerContext, {
      wrapper: CartDrawerContextProvider,
    });

    act(() => result.current.open());

    expect(result.current.isOpen).toBe(true);

    act(() => result.current.close());

    expect(result.current.isOpen).toBe(false);
  });
});
