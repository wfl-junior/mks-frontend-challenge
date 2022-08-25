import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "~/components/Header";
import { useCartDrawerContext } from "~/contexts/CartDrawerContext";
import { useFullCartItems } from "~/hooks/useFullCartItems";
import { TestWrapperComponent } from "../TestWrapperComponent";

jest.mock("~/contexts/CartDrawerContext");
jest.mock("~/hooks/useFullCartItems");

const mockedUseCartDrawerContext = jest.mocked(useCartDrawerContext);
const mockedUseFullCartItems = jest.mocked(useFullCartItems);

mockedUseCartDrawerContext.mockReturnValue({
  open: jest.fn(),
} as any);

mockedUseFullCartItems.mockReturnValue(null);

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

  it("should show the correct number of items in cart", () => {
    mockedUseFullCartItems.mockReturnValueOnce(
      Array.from({ length: 5 }, (_, i) => i + 1).map(number => ({
        quantity: number,
        product: {
          id: number,
          name: "Fake Product",
          brand: "Apple",
          photo: "fake-photo",
          price: 2000,
          description: "Fake product description",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      })),
    );

    render(<Header />, { wrapper: TestWrapperComponent });

    const button = screen.getByTitle(openCartButtonTitle);

    expect(button.textContent).toBe("5");
  });
});
