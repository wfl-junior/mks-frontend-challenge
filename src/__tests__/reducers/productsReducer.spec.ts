import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import {
  productsActions,
  productsReducer,
  ProductsState,
} from "~/redux/slices/products";

describe("productsReducer", () => {
  it("should set products state correctly", () => {
    const previousState: ProductsState = {
      products: null,
    };

    const newProducts: ProductDTO[] = [
      {
        id: 1,
        name: "Fake Product",
        brand: "Apple",
        photo: "fake-photo",
        price: 2000,
        description: "Fake product description",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    const newState = productsReducer(
      previousState,
      productsActions.setProducts({
        products: newProducts,
      }),
    );

    expect(newState).toEqual({ products: newProducts });
  });
});
