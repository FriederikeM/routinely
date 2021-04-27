import NameFilter from "./NameFilter";
import IconButton from "./IconButton";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import "./ProductList.css";

export default function ProductList() {
  return (
    <div className="ProductList">
      <header className="header">
        <div className="filter-wrapper">
          <NameFilter />
          <CategoryFilter />
        </div>
        <IconButton />
      </header>
      <main className="main">
        <ProductCard />
      </main>
    </div>
  );
}
