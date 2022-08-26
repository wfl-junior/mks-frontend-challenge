import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartDrawer } from "~/components/CartDrawer";
import { useCartDrawerContext } from "~/contexts/CartDrawerContext";
import { useFullCartItems } from "~/hooks/useFullCartItems";
import { useDispatch } from "~/redux/hooks";
import { cartActions } from "~/redux/slices/cart";
import { TestWrapperComponent } from "../TestWrapperComponent";

jest.mock("~/contexts/CartDrawerContext");
jest.mock("~/hooks/useFullCartItems");
jest.mock("~/redux/hooks");

const mockedUseCartDrawerContext = jest.mocked(useCartDrawerContext);
const mockedUseFullCartItems = jest.mocked(useFullCartItems);
const mockedUseDispatch = jest.mocked(useDispatch as any);

mockedUseCartDrawerContext.mockReturnValue({} as any);
mockedUseFullCartItems.mockReturnValue(null);
mockedUseDispatch.mockReturnValue(jest.fn());

describe("CartDrawer component", () => {
  it("should render title", () => {
    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    expect(screen.getByText(/Carrinho/)).toBeInTheDocument();
  });

  it("should be hidden when not open", () => {
    mockedUseCartDrawerContext.mockReturnValueOnce({
      isOpen: false,
    } as any);

    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    expect(screen.getByRole("complementary")).toHaveStyle({
      transform: "translateX(100%)",
    });
  });

  it("should be visible when open", () => {
    mockedUseCartDrawerContext.mockReturnValueOnce({
      isOpen: true,
    } as any);

    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    expect(screen.getByRole("complementary")).toHaveStyle({
      transform: "translateX(0)",
    });
  });

  it("should close drwaer on close button click", async () => {
    const mockedClose = jest.fn();

    mockedUseCartDrawerContext.mockReturnValueOnce({
      close: mockedClose,
    } as any);

    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    await userEvent.click(screen.getByTitle("Fechar"));

    expect(mockedClose).toHaveBeenCalled();
  });

  it("should render empty cart text when products are not initialized yet", () => {
    mockedUseFullCartItems.mockReturnValueOnce(null);

    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    expect(screen.getByText("Seu carrinho está vazio.")).toBeInTheDocument();
  });

  it("should render empty cart text when cart is empty", () => {
    mockedUseFullCartItems.mockReturnValueOnce([]);

    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    expect(screen.getByText("Seu carrinho está vazio.")).toBeInTheDocument();
  });

  it("should not render empty cart text when cart is not empty", () => {
    mockedUseFullCartItems.mockReturnValueOnce([
      {
        product: {
          id: 1,
          name: "First Product",
          price: 0,
        } as any,
        quantity: 1,
      },
    ]);

    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    expect(
      screen.queryByText("Seu carrinho está vazio."),
    ).not.toBeInTheDocument();
  });

  it("should render all items in cart", async () => {
    mockedUseFullCartItems.mockReturnValueOnce([
      {
        product: {
          id: 1,
          name: "Product 1",
          price: 0,
        } as any,
        quantity: 2,
      },
      {
        product: {
          id: 2,
          name: "Product 2",
          price: 0,
        } as any,
        quantity: 1,
      },
    ]);

    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("should render Total text", () => {
    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    expect(screen.getByText("Total:")).toBeInTheDocument();
  });

  it("should render total price correctly", () => {
    mockedUseFullCartItems.mockReturnValueOnce([
      {
        product: {
          id: 1,
          price: 1000,
        } as any,
        quantity: 2,
      },
      {
        product: {
          id: 2,
          price: 2000,
        } as any,
        quantity: 1,
      },
    ]);

    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    expect(screen.getByText("R$4000")).toBeInTheDocument();
  });

  it("should clear cart and close drawer on complete purchase button click", async () => {
    const mockedClose = jest.fn();
    const mockedDispatch = jest.fn();

    mockedUseCartDrawerContext.mockReturnValueOnce({
      close: mockedClose,
    } as any);

    mockedUseDispatch.mockReturnValue(mockedDispatch);

    render(<CartDrawer />, { wrapper: TestWrapperComponent });

    await userEvent.click(
      screen.getByRole("button", { name: "Finalizar Compra" }),
    );

    expect(mockedClose).toHaveBeenCalled();
    expect(mockedDispatch).toHaveBeenCalledWith(cartActions.clearItems());
  });
});
