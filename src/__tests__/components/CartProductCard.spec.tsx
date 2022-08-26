import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartProductCard } from "~/components/CartProductCard";
import { FullCartItem } from "~/hooks/useFullCartItems";
import { useDispatch } from "~/redux/hooks";
import { cartActions } from "~/redux/slices/cart";
import { formatPrice } from "~/utils/formatPrice";
import { TestWrapperComponent } from "../TestWrapperComponent";

jest.mock("~/redux/hooks");
const mockedUseDispatch = jest.mocked(useDispatch as any);

mockedUseDispatch.mockReturnValue(jest.fn());

const fakeCartItem: FullCartItem = {
  quantity: 2,
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

describe("CartProductCard component", () => {
  it("should render product image", () => {
    render(<CartProductCard {...fakeCartItem} />, {
      wrapper: TestWrapperComponent,
    });

    expect(screen.getByAltText(fakeCartItem.product.name)).toBeInTheDocument();
  });

  it("should render product name", () => {
    render(<CartProductCard {...fakeCartItem} />, {
      wrapper: TestWrapperComponent,
    });

    expect(screen.getByText(fakeCartItem.product.name)).toBeInTheDocument();
  });

  it("should decrement product quantity on decrement button click, minimum of 1", async () => {
    const mockedDispatch = jest.fn();

    mockedUseDispatch.mockReturnValueOnce(mockedDispatch);

    const quantity = 2;

    render(
      <CartProductCard product={fakeCartItem.product} quantity={quantity} />,
      { wrapper: TestWrapperComponent },
    );

    const button = screen.getByTitle("Diminuir quantidade");

    await userEvent.click(button);

    expect(mockedDispatch).toHaveBeenCalledWith(
      cartActions.updateItemQuantity({
        productId: fakeCartItem.product.id,
        quantity: 1,
      }),
    );

    await userEvent.click(button);

    expect(mockedDispatch).toHaveBeenCalledWith(
      cartActions.updateItemQuantity({
        productId: fakeCartItem.product.id,
        quantity: 1,
      }),
    );
  });

  it("should increment product quantity on increment button click", async () => {
    const mockedDispatch = jest.fn();

    mockedUseDispatch.mockReturnValueOnce(mockedDispatch);

    render(<CartProductCard {...fakeCartItem} />, {
      wrapper: TestWrapperComponent,
    });

    await userEvent.click(screen.getByTitle("Aumentar quantidade"));

    expect(mockedDispatch).toHaveBeenCalledWith(
      cartActions.updateItemQuantity({
        productId: fakeCartItem.product.id,
        quantity: fakeCartItem.quantity + 1,
      }),
    );
  });

  it("should update product quantity on input, allowing only numbers", async () => {
    const mockedDispatch = jest.fn();

    mockedUseDispatch.mockReturnValueOnce(mockedDispatch);

    render(<CartProductCard {...fakeCartItem} />, {
      wrapper: TestWrapperComponent,
    });

    const input = screen.getByLabelText("Qtd:");

    await userEvent.clear(input);
    await userEvent.type(input, "ç#!hnB'");

    expect(input).toHaveAttribute("value", "");

    await userEvent.clear(input);
    await userEvent.type(input, "5");

    expect(input).toHaveAttribute("value", "5");

    waitFor(
      () => {
        expect(mockedDispatch).toHaveBeenCalledWith(
          cartActions.updateItemQuantity({
            productId: fakeCartItem.product.id,
            quantity: 5,
          }),
        );
      },
      { timeout: 150 },
    );
  });

  it("should render product price * quantity and formatted", () => {
    render(<CartProductCard {...fakeCartItem} />, {
      wrapper: TestWrapperComponent,
    });

    expect(
      screen.getByText(
        formatPrice(fakeCartItem.product.price * fakeCartItem.quantity),
      ),
    ).toBeInTheDocument();
  });

  it("should remove from cart on remove from cart button click", async () => {
    const mockedDispatch = jest.fn();

    mockedUseDispatch.mockReturnValueOnce(mockedDispatch);

    render(<CartProductCard {...fakeCartItem} />, {
      wrapper: TestWrapperComponent,
    });

    await userEvent.click(screen.getByTitle("Remover do carrinho"));

    expect(mockedDispatch).toHaveBeenCalledWith(
      cartActions.removeItem({
        productId: fakeCartItem.product.id,
      }),
    );
  });
});
