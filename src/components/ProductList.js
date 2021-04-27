import Filter from "./Filter";
import IconButton from "./IconButton";
import ProductCard from "./ProductCard";
import "./ProductList.css";

export default function ProductList() {
  return (
    <div className="ProductList">
      <header>
        <Filter />
        <IconButton />
      </header>
      <main>
        <ProductCard />
      </main>
    </div>
  );
}
