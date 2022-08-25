import { render, screen } from "@testing-library/react";
import { Footer } from "~/components/Footer";
import { TestWrapperComponent } from "../TestWrapperComponent";

describe("Footer component", () => {
  it("should render all rights reserved text", () => {
    render(<Footer />, { wrapper: TestWrapperComponent });

    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados"),
    ).toBeInTheDocument();
  });
});
