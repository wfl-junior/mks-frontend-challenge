import { ShoppingBagIcon } from "../ShoppingBagIcon";
import {
  BuyButton,
  Content,
  Description,
  Header,
  Image,
  Price,
  PriceBadge,
  ProductCardContainer,
  Title,
} from "./styles";

interface ProductCardProps {}

export const ProductCard: React.FC<ProductCardProps> = () => (
  <ProductCardContainer>
    <Image
      src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp"
      alt=""
    />

    <Content>
      <Header>
        <Title>Apple Watch Series 7</Title>

        <PriceBadge>
          <Price>R$3200</Price>
        </PriceBadge>
      </Header>

      <Description>
        O Apple Watch faz coisas que outros aparelhos não conseguem porque ele
        fica no seu pulso.
      </Description>
    </Content>

    <BuyButton type="button">
      <ShoppingBagIcon />
      <span>Comprar</span>
    </BuyButton>
  </ProductCardContainer>
);
