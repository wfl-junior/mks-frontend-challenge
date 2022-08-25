import { useCartDrawerContext } from "~/contexts/CartDrawerContext";
import { useFullCartItems } from "~/hooks/useFullCartItems";
import { CartIcon } from "../CartIcon";
import {
  CartButton,
  HeaderContainer,
  Logo,
  LogoPrimaryText,
  LogoSecondaryText,
} from "./styles";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { open } = useCartDrawerContext();
  const cartItems = useFullCartItems();

  return (
    <HeaderContainer>
      <Logo>
        <LogoPrimaryText>MKS</LogoPrimaryText>
        <LogoSecondaryText>Sistemas</LogoSecondaryText>
      </Logo>

      <CartButton type="button" onClick={open} title="Abrir carrinho">
        <CartIcon />
        <span>{cartItems?.length || 0}</span>
      </CartButton>
    </HeaderContainer>
  );
};
