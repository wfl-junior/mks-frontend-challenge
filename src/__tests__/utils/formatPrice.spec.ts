import { formatPrice } from "~/utils/formatPrice";

describe("formatPrice util", () => {
  it("should format price as expected", () => {
    const price = 1000;
    const expectedPrice = "R$1000";

    expect(formatPrice(price)).toBe(expectedPrice);
  });
});
