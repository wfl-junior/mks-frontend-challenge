import { useMemo } from "react";
import { useCartDrawerContext } from "~/contexts/CartDrawerContext";
import { useFullCartItems } from "~/hooks/useFullCartItems";
import { useDispatch } from "~/redux/hooks";
import { cartActions } from "~/redux/slices/cart";
import { formatPrice } from "~/utils/formatPrice";
import { CartProductCard } from "../CartProductCard";
import {
  CartDrawerContainer,
  CloseButton,
  CompletePurchaseButton,
  Content,
  Footer,
  Header,
  NoProductsText,
  Products,
  Title,
} from "./styles";

interface CartDrawerProps {}

export const CartDrawer: React.FC<CartDrawerProps> = () => {
  const { isOpen, close } = useCartDrawerContext();
  const cartItems = useFullCartItems();
  const dispatch = useDispatch();

  function handleCompletePurchase() {
    close();
    dispatch(cartActions.clearItems());
  }

  const totalValue = useMemo(() => {
    return formatPrice(
      cartItems?.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ) || 0,
    );
  }, [cartItems]);

  return (
    <CartDrawerContainer isOpen={isOpen}>
      <Content>
        <Header>
          <Title>
            Carrinho <br />
            de compras
          </Title>

          <CloseButton type="button" onClick={close} title="Fechar">
            X
          </CloseButton>
        </Header>

        <Products>
          {cartItems?.length ? (
            cartItems.map(item => (
              <CartProductCard key={item.product.id} {...item} />
            ))
          ) : (
            <NoProductsText>Seu carrinho está vazio.</NoProductsText>
          )}
        </Products>
      </Content>

      <Footer>
        <span>Total:</span>
        <span>{totalValue}</span>
      </Footer>

      <CompletePurchaseButton type="button" onClick={handleCompletePurchase}>
        Finalizar Compra
      </CompletePurchaseButton>
    </CartDrawerContainer>
  );
};
