import { useMemo } from "react";
import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { useCartItems } from "./useCartItems";
import { useProducts } from "./useProducts";

export interface FullCartItem {
  product: ProductDTO;
  quantity: number;
}

export function useFullCartItems(): FullCartItem[] | null {
  const products = useProducts();
  const cartItems = useCartItems();

  const fullCartItems = useMemo((): FullCartItem[] | null => {
    if (!products) {
      return null;
    }

    return (
      cartItems
        // filter para remover do carrinho produtos que não existem mais
        .filter(item => products.some(product => product.id === item.productId))
        .map(item => ({
          quantity: item.quantity,
          product: products.find(product => product.id === item.productId)!,
        }))
    );
  }, [cartItems, products]);

  return fullCartItems;
}
