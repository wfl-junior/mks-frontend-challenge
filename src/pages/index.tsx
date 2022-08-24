import { NextPage } from "next";
import { ProductCard } from "~/components/ProductCard";
import { Products } from "~/styles/Home.styles";

interface HomeProps {}

const Home: NextPage<HomeProps> = () => (
  <Products>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </Products>
);

export default Home;
