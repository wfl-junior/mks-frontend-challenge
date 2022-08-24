import { useCartDrawerContext } from "~/contexts/CartDrawerContext";
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

  return (
    <HeaderContainer>
      <Logo>
        <LogoPrimaryText>MKS</LogoPrimaryText>
        <LogoSecondaryText>Sistemas</LogoSecondaryText>
      </Logo>

      <CartButton type="button" onClick={open}>
        <CartIcon />
        <span>0</span>
      </CartButton>
    </HeaderContainer>
  );
};
