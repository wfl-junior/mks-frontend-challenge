import { render, screen, waitFor } from "@testing-library/react";
import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { useProducts } from "~/hooks/useProducts";
import Home from "~/pages";
import { useDispatch } from "~/redux/hooks";
import { productsActions } from "~/redux/slices/products";
import { fetchProducts } from "~/utils/fetchProducts";
import { TestWrapperComponent } from "../TestWrapperComponent";

jest.mock("~/utils/fetchProducts");
jest.mock("~/redux/hooks");
jest.mock("~/hooks/useProducts");

const mockedUseDispatch = jest.mocked(useDispatch as any);
const mockedFetchProducts = jest.mocked(fetchProducts);
const mockedUseProducts = jest.mocked(useProducts);

mockedUseDispatch.mockReturnValue(jest.fn());
mockedFetchProducts.mockResolvedValue({ products: [], count: 0 });
mockedUseProducts.mockReturnValue(null);

const fakeProducts: ProductDTO[] = Array.from(
  { length: 8 },
  (_, i) => i + 1,
).map(number => ({
  id: number,
  name: `Fake product ${number}`,
  brand: "Apple",
  photo: "fake-photo",
  price: 1000,
  description: "Fake product description",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}));

describe("Home page", () => {
  it("should dispatch setProducts with the returned value of fetchProducts and convert prices from string to number on mount", async () => {
    const mockedDispatch = jest.fn();

    mockedUseDispatch.mockReturnValueOnce(mockedDispatch);

    mockedFetchProducts.mockResolvedValueOnce({
      count: 0,
      products: fakeProducts.map(product => ({
        ...product,
        price: product.price.toString(),
      })),
    });

    render(<Home />, {
      wrapper: TestWrapperComponent,
    });

    await waitFor(
      () => {
        expect(mockedDispatch).toHaveBeenCalledWith(
          productsActions.setProducts({
            products: fakeProducts.map(product => ({
              ...product,
              price: Number(product.price),
            })),
          }),
        );
      },
      { timeout: 150 },
    );
  });

  it("should render skeleton product cards while loading", async () => {
    mockedUseProducts.mockReturnValueOnce(null);

    render(<Home />, {
      wrapper: TestWrapperComponent,
    });

    const skeletons = screen.getAllByRole("skeleton");

    expect(skeletons).toHaveLength(8);

    skeletons.forEach(skeleton => {
      expect(skeleton).toBeInTheDocument();
    });
  });

  it("should render all product cards when ready", async () => {
    mockedUseProducts.mockReturnValueOnce(fakeProducts);

    render(<Home />, {
      wrapper: TestWrapperComponent,
    });

    fakeProducts.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });
});
