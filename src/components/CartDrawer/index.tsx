import { useCartDrawerContext } from "~/contexts/CartDrawerContext";
import { CartProductCard } from "../CartProductCard";
import {
  CartDrawerContainer,
  CloseButton,
  CompletePurchaseButton,
  Content,
  Footer,
  Header,
  Products,
  Title,
} from "./styles";

interface CartDrawerProps {}

export const CartDrawer: React.FC<CartDrawerProps> = () => {
  const { isOpen, close } = useCartDrawerContext();

  return (
    <CartDrawerContainer isOpen={isOpen}>
      <Content>
        <Header>
          <Title>
            Carrinho <br />
            de compras
          </Title>

          <CloseButton type="button" onClick={close}>
            X
          </CloseButton>
        </Header>

        <Products>
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
        </Products>
      </Content>

      <Footer>
        <span>Total:</span>
        <span>R$798</span>
      </Footer>

      <CompletePurchaseButton type="button">
        Finalizar Compra
      </CompletePurchaseButton>
    </CartDrawerContainer>
  );
};
