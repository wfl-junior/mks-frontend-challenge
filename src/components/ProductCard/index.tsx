import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { useDispatch } from "~/redux/hooks";
import { cartActions } from "~/redux/slices/cart";
import { formatPrice } from "~/utils/formatPrice";
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

interface ProductCardProps {
  product: ProductDTO;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      cartActions.addItem({
        productId: product.id,
      }),
    );
  }

  return (
    <ProductCardContainer>
      <Image src={product.photo} alt={product.name} />

      <Content>
        <Header>
          <Title>{product.name}</Title>

          <PriceBadge>
            <Price>{formatPrice(product.price)}</Price>
          </PriceBadge>
        </Header>

        <Description>{product.description}</Description>
      </Content>

      <BuyButton type="button" onClick={handleAddToCart}>
        <ShoppingBagIcon />
        <span>Comprar</span>
      </BuyButton>
    </ProductCardContainer>
  );
};
