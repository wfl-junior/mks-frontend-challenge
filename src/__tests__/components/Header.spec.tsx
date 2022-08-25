import { act, render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "~/components/Header";
import { useCartDrawerContext } from "~/contexts/CartDrawerContext";
import { useDispatch } from "~/redux/hooks";
import { cartActions } from "~/redux/slices/cart";
import { TestWrapperComponent } from "../TestWrapperComponent";

jest.mock("~/contexts/CartDrawerContext");
const mockedUseCartDrawerContext = jest.mocked(useCartDrawerContext);

mockedUseCartDrawerContext.mockReturnValue({
  open: jest.fn(),
} as any);

const openCartButtonTitle = "Abrir carrinho";

describe("Header component", () => {
  it("should render logo", () => {
    render(<Header />, { wrapper: TestWrapperComponent });

    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });

  it("should open cart drawer on cart button click", async () => {
    const mockedOpen = jest.fn();

    mockedUseCartDrawerContext.mockReturnValueOnce({
      open: mockedOpen,
    } as any);

    render(<Header />, { wrapper: TestWrapperComponent });

    await userEvent.click(screen.getByTitle(openCartButtonTitle));

    expect(mockedOpen).toHaveBeenCalled();
  });

  it("should update cart button number when the number of items in cart changes", () => {
    render(<Header />, { wrapper: TestWrapperComponent });

    const {
      result: { current: dispatch },
    } = renderHook(useDispatch, { wrapper: TestWrapperComponent });

    const button = screen.getByTitle(openCartButtonTitle);

    expect(button.textContent).toBe("0");

    act(() => {
      dispatch(
        cartActions.addItem({
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
        }),
      );
    });

    expect(button.textContent).toBe("1");
  });
});
