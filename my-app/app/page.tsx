import Image from "next/image";
import ProductCard from "./components/productCard";

export default function Home() {
  return (
    <main>
      <h1>
        hello world
        <ProductCard />
      </h1>
    </main>
  );
}
