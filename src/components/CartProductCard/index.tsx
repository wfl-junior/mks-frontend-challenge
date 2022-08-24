import { useId, useState } from "react";
import {
  CartProductCardContainer,
  DeleteFromCartButton,
  Price,
  PriceBadge,
  ProductImage,
  ProductImageContainer,
  QuantityButton,
  QuantityContainer,
  QuantityInput,
  QuantityLabel,
  QuantityPriceContainer,
  Title,
} from "./styles";

interface CartProductCardProps {}

export const CartProductCard: React.FC<CartProductCardProps> = () => {
  const id = useId();
  const [quantity, setQuantity] = useState(1);

  const inputId = `${id}-quantity`;

  function decrementQuantity() {
    let newQuantity = 1;

    if (!isNaN(quantity)) {
      newQuantity = quantity - 1;
    }

    setQuantity(newQuantity || 1);
  }

  function incrementQuantity() {
    let newQuantity = 1;

    if (!isNaN(quantity)) {
      newQuantity = quantity + 1;
    }

    setQuantity(newQuantity);
  }

  return (
    <CartProductCardContainer>
      <DeleteFromCartButton type="button">X</DeleteFromCartButton>

      <ProductImageContainer>
        <ProductImage
          src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp"
          width="100%"
          height="100%"
          alt="Apple Watch Series 7"
        />
      </ProductImageContainer>

      <Title>Apple Watch Series 7</Title>

      <QuantityPriceContainer>
        <QuantityContainer>
          <QuantityLabel htmlFor={inputId}>Qtd:</QuantityLabel>

          <QuantityButton type="button" onClick={decrementQuantity}>
            -
          </QuantityButton>

          <QuantityInput
            id={inputId}
            type="text"
            inputMode="numeric"
            value={isNaN(quantity) ? "" : quantity}
            onChange={e => setQuantity(parseInt(e.target.value))}
            length={quantity.toString().length}
          />

          <QuantityButton type="button" onClick={incrementQuantity}>
            +
          </QuantityButton>
        </QuantityContainer>

        <PriceBadge>
          <Price>R$3200</Price>
        </PriceBadge>
      </QuantityPriceContainer>
    </CartProductCardContainer>
  );
};
