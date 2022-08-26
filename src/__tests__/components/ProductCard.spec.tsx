import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { ProductCard } from "~/components/ProductCard";
import { useDispatch } from "~/redux/hooks";
import { cartActions } from "~/redux/slices/cart";
import { formatPrice } from "~/utils/formatPrice";
import { TestWrapperComponent } from "../TestWrapperComponent";

jest.mock("~/redux/hooks");
const mockedUseDispatch = jest.mocked(useDispatch as any);

mockedUseDispatch.mockReturnValue(jest.fn());

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

describe("ProductCard component", () => {
  it("should render product image", () => {
    render(<ProductCard product={fakeProduct} />, {
      wrapper: TestWrapperComponent,
    });

    expect(screen.getByAltText(fakeProduct.name)).toBeInTheDocument();
  });

  it("should render product name", () => {
    render(<ProductCard product={fakeProduct} />, {
      wrapper: TestWrapperComponent,
    });

    expect(screen.getByText(fakeProduct.name)).toBeInTheDocument();
  });

  it("should render product price and formatted", () => {
    render(<ProductCard product={fakeProduct} />, {
      wrapper: TestWrapperComponent,
    });

    expect(
      screen.getByText(formatPrice(fakeProduct.price)),
    ).toBeInTheDocument();
  });

  it("should render product description", () => {
    render(<ProductCard product={fakeProduct} />, {
      wrapper: TestWrapperComponent,
    });

    expect(screen.getByText(fakeProduct.description)).toBeInTheDocument();
  });

  it("should add product to cart on buy button click", async () => {
    const mockedDispatch = jest.fn();

    mockedUseDispatch.mockReturnValueOnce(mockedDispatch);

    render(<ProductCard product={fakeProduct} />, {
      wrapper: TestWrapperComponent,
    });

    await userEvent.click(screen.getByRole("button", { name: /Comprar/ }));

    expect(mockedDispatch).toHaveBeenCalledWith(
      cartActions.addItem({
        productId: fakeProduct.id,
      }),
    );
  });
});
