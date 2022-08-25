import { useCartDrawerContext } from "~/contexts/CartDrawerContext";
import { useSelector } from "~/redux/hooks";
import { selectCartItems } from "~/redux/slices/cart";
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
  const cartItems = useSelector(selectCartItems);

  return (
    <HeaderContainer>
      <Logo>
        <LogoPrimaryText>MKS</LogoPrimaryText>
        <LogoSecondaryText>Sistemas</LogoSecondaryText>
      </Logo>

      <CartButton type="button" onClick={open}>
        <CartIcon />
        <span>{cartItems.length}</span>
      </CartButton>
    </HeaderContainer>
  );
};
