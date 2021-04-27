import Filter from "./Filter";
import IconButton from "./IconButton";
import ProductCard from "./ProductCard";
import "./ProductList.css";

export default function ProductList() {
  return (
    <div className="ProductList">
      <header className="header">
        <Filter />
        <IconButton />
      </header>
      <main className="main">
        <ProductCard />
      </main>
    </div>
  );
}
