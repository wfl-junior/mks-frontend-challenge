import { useCartDrawerContext } from "~/contexts/CartDrawerContext";
import { useDispatch, useSelector } from "~/redux/hooks";
import { cartActions, selectCartItems } from "~/redux/slices/cart";
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
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  function handleCompletePurchase() {
    close();
    dispatch(cartActions.clearItems());
  }

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
          {cartItems.length ? (
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
        <span>R$798</span>
      </Footer>

      <CompletePurchaseButton type="button" onClick={handleCompletePurchase}>
        Finalizar Compra
      </CompletePurchaseButton>
    </CartDrawerContainer>
  );
};
