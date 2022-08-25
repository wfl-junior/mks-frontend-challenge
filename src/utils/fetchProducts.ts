import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { fetchWrapper } from "./fetchWrapper";

export interface ProductsResponse {
  products: Array<Omit<ProductDTO, "price"> & { price: string }>;
  count: number;
}

export function fetchProducts(perPage: number, options?: RequestInit) {
  return fetchWrapper<ProductsResponse>(
    `https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=${perPage}&sortBy=name&orderBy=ASC`,
    options,
  );
}
