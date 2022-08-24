import { CopyrightText, FooterContainer } from "./styles";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => (
  <FooterContainer>
    <CopyrightText>
      MKS sistemas &copy; Todos os direitos reservados
    </CopyrightText>
  </FooterContainer>
);
