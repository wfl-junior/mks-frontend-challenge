import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ProductDTO } from "~/@types/DTOs/ProductDTO";
import { ProductCard } from "~/components/ProductCard";
import { ProductCardSkeleton } from "~/components/ProductCardSkeleton";
import { useProducts } from "~/hooks/useProducts";
import { useDispatch } from "~/redux/hooks";
import { productsActions } from "~/redux/slices/products";
import { ErrorMessage, Products } from "~/styles/Home.styles";

const perPage = 8;

interface HomeProps {}

const skeletonProductsArray = Array.from({ length: perPage }, (_, i) => i);

const Home: NextPage<HomeProps> = () => {
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const products = useProducts();

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=${perPage}&sortBy=name&orderBy=ASC`,
      { signal: controller.signal },
    )
      .then(response => response.json())
      .then(
        (response: {
          products: Array<ProductDTO & { price: string }>;
          count: number;
        }) => {
          dispatch(
            productsActions.setProducts({
              products: response.products.map(product => ({
                ...product,
                price: Number(product.price),
              })),
            }),
          );
        },
      )
      .catch(error => {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setHasError(true);
        }
      });

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  if (hasError) {
    return (
      <ErrorMessage>
        Ocorreu um erro inesperado ao buscar pelos produtos. 😰
      </ErrorMessage>
    );
  }

  return (
    <Products>
      {!products.length
        ? skeletonProductsArray.map(number => (
            <ProductCardSkeleton key={number} />
          ))
        : products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
    </Products>
  );
};

export default Home;
