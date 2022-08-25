import {
  Content,
  Description,
  Header,
  ProductCardSkeletonContainer,
  SkeletonBuyButton,
  SkeletonDescription,
  SkeletonImage,
  SkeletonPrice,
  SkeletonTitle,
  Title,
} from "./styles";

interface ProductCardSkeletonProps {}

export const ProductCardSkeleton: React.FC<ProductCardSkeletonProps> = ({}) => (
  <ProductCardSkeletonContainer
    role="skeleton"
    aria-busy="true"
    aria-live="polite"
  >
    <SkeletonImage />

    <Content>
      <Header>
        <Title>
          <SkeletonTitle />
          <SkeletonTitle style={{ width: "50%" }} />
        </Title>

        <SkeletonPrice />
      </Header>

      <Description>
        <SkeletonDescription />
        <SkeletonDescription style={{ width: "75%" }} />
      </Description>
    </Content>

    <SkeletonBuyButton />
  </ProductCardSkeletonContainer>
);
