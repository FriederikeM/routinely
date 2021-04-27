import NameFilter from "./NameFilter";
import CalendarButton from "./CalendarButton";
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
        <CalendarButton />
      </header>
      <main className="main">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
    </div>
  );
}
