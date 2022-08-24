import { ShoppingBagIcon } from "../ShoppingBagIcon";
import {
  BuyButton,
  Content,
  Description,
  Header,
  Price,
  PriceBadge,
  ProductCardContainer,
  ProductImage,
  Title,
} from "./styles";

interface ProductCardProps {}

export const ProductCard: React.FC<ProductCardProps> = () => (
  <ProductCardContainer>
    <ProductImage
      src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp"
      width="100%"
      height="138px"
      alt="Apple Watch Series 7"
      priority
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
