import { renderHook } from "@testing-library/react";
import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { useCartItems } from "~/hooks/useCartItems";
import { useFullCartItems } from "~/hooks/useFullCartItems";
import { useProducts } from "~/hooks/useProducts";
import { TestWrapperComponent } from "../TestWrapperComponent";

jest.mock("~/hooks/useProducts");
jest.mock("~/hooks/useCartItems");

const mockedUseProducts = jest.mocked(useProducts);
const mockedUseCartItems = jest.mocked(useCartItems);

mockedUseProducts.mockReturnValue(null);
mockedUseCartItems.mockReturnValue([]);

describe("useFullCartItems hook", () => {
  it("should return null if products are not initialized yet", () => {
    mockedUseProducts.mockReturnValueOnce(null);

    const { result } = renderHook(useFullCartItems, {
      wrapper: TestWrapperComponent,
    });

    expect(result.current).toBeNull();
  });

  it("should return full cart items if products are initialized", () => {
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

    mockedUseProducts.mockReturnValueOnce([fakeProduct]);

    mockedUseCartItems.mockReturnValueOnce([
      {
        quantity: 1,
        productId: 1,
      },
    ]);

    const { result } = renderHook(useFullCartItems, {
      wrapper: TestWrapperComponent,
    });

    expect(result.current).toEqual([
      {
        quantity: 1,
        product: fakeProduct,
      },
    ]);
  });
});
