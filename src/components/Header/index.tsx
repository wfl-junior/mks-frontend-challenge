import { CartIcon } from "../CartIcon";
import {
  CartButton,
  HeaderContainer,
  Logo,
  LogoPrimaryText,
  LogoSecondaryText,
} from "./styles";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <HeaderContainer>
    <Logo>
      <LogoPrimaryText>MKS</LogoPrimaryText>
      <LogoSecondaryText>Sistemas</LogoSecondaryText>
    </Logo>

    <CartButton type="button">
      <CartIcon />
      <span>0</span>
    </CartButton>
  </HeaderContainer>
);
