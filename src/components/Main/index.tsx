import { ContentContainer, MainContainer } from "./styles";

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => (
  <MainContainer>
    <ContentContainer>{children}</ContentContainer>
  </MainContainer>
);
