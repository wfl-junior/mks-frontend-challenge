import { useSelector } from "~/redux/hooks";
import { selectProducts } from "~/redux/slices/products";

export function useProducts() {
  return useSelector(selectProducts);
}
