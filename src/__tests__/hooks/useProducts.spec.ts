import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { useProducts } from "~/hooks/useProducts";
import { useDispatch } from "~/redux/hooks";
import { productsActions } from "~/redux/slices/products";
import { TestWrapperComponent } from "../TestWrapperComponent";

describe("useProducts hook", () => {
  it("should return products from store", () => {
    const { result } = renderHook(useProducts, {
      wrapper: TestWrapperComponent,
    });

    const {
      result: { current: dispatch },
    } = renderHook(useDispatch, {
      wrapper: TestWrapperComponent,
    });

    const fakeProduct: ProductDTO = {
      id: 1,
      name: "Fake Product",
      brand: "Apple",
      photo: "fake-photo",
      price: 2000,
      description: "Fake product description",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    expect(result.current).toEqual(null);

    act(() => {
      dispatch(
        productsActions.setProducts({
          products: [fakeProduct],
        }),
      );
    });

    expect(result.current).toEqual([fakeProduct]);
  });
});
