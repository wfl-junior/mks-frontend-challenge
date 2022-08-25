import { useSelector } from "~/redux/hooks";
import { selectCartItems } from "~/redux/slices/cart";

export function useCartItems() {
  return useSelector(selectCartItems);
}
