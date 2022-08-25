import { useState } from "react";
import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { useDispatch } from "~/redux/hooks";
import { cartActions } from "~/redux/slices/cart";
import { formatPrice } from "~/utils/formatPrice";
import {
  CartProductCardContainer,
  DeleteFromCartButton,
  Image,
  Price,
  PriceBadge,
  QuantityButton,
  QuantityContainer,
  QuantityInput,
  QuantityLabel,
  QuantityPriceContainer,
  Title,
} from "./styles";

interface CartProductCardProps {
  product: ProductDTO;
  quantity: number;
}

export const CartProductCard: React.FC<CartProductCardProps> = ({
  product,
  quantity,
}) => {
  const [quantityInput, setQuantityInput] = useState(quantity);
  const dispatch = useDispatch();

  function handleRemoveItemFromCart() {
    dispatch(
      cartActions.removeItem({
        productId: product.id,
      }),
    );
  }

  function handleDecrementQuantity() {
    let newQuantity = 1;

    if (!isNaN(quantityInput)) {
      newQuantity = Math.max(quantityInput - 1, 1);
    }

    setQuantityInput(newQuantity);

    dispatch(
      cartActions.updateItemQuantity({
        productId: product.id,
        quantity: newQuantity,
      }),
    );
  }

  function handleIncrementQuantity() {
    let newQuantity = 1;

    if (!isNaN(quantityInput)) {
      newQuantity = quantityInput + 1;
    }

    setQuantityInput(newQuantity);

    dispatch(
      cartActions.updateItemQuantity({
        productId: product.id,
        quantity: newQuantity,
      }),
    );
  }

  function handleInputQuantityChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const value = parseInt(event.target.value);
    setQuantityInput(value);

    if (!isNaN(value)) {
      dispatch(
        cartActions.updateItemQuantity({
          productId: product.id,
          quantity: value,
        }),
      );
    }
  }

  const inputId = `product-${product.id}:quantity`;

  return (
    <CartProductCardContainer>
      <DeleteFromCartButton
        type="button"
        onClick={handleRemoveItemFromCart}
        title="Remover do carrinho"
      >
        X
      </DeleteFromCartButton>

      <Image src={product.photo} alt={product.name} />
      <Title>{product.name}</Title>

      <QuantityPriceContainer>
        <QuantityContainer>
          <QuantityLabel htmlFor={inputId}>Qtd:</QuantityLabel>

          <QuantityButton
            type="button"
            onClick={handleDecrementQuantity}
            title="Diminuir quantidade"
          >
            -
          </QuantityButton>

          <QuantityInput
            id={inputId}
            type="text"
            inputMode="numeric"
            value={isNaN(quantityInput) ? "" : quantityInput}
            onChange={handleInputQuantityChange}
            length={quantityInput.toString().length}
          />

          <QuantityButton
            type="button"
            onClick={handleIncrementQuantity}
            title="Aumentar quantidade"
          >
            +
          </QuantityButton>
        </QuantityContainer>

        <PriceBadge>
          <Price>{formatPrice(product.price * quantity)}</Price>
        </PriceBadge>
      </QuantityPriceContainer>
    </CartProductCardContainer>
  );
};
