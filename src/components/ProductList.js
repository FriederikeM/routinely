import NameFilter from "./NameFilter";
import CalendarButton from "./CalendarButton";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import "./ProductList.css";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    const fetchProducts = () => {
      return fetch("products.json")
        .then((response) => response.json())
        .then((productData) => {
          setProducts(productData);
        });
    };
    fetchProducts();
  }, []);

  function handleCategoryFilterChange(categorySelected) {
    setCategoryFilter(categorySelected);
  }

  function renderProducts() {
    return products
      .filter((product) => {
        return product.category === categoryFilter || categoryFilter === "all";
      })
      .map((product) => {
        const { id, name, image, url, packaging } = product;
        return (
          <li key={id}>
            <ProductCard
              name={name}
              image={image}
              url={url}
              packaging={packaging}
            />
          </li>
        );
      });
  }

  return (
    <div className="ProductList">
      <header className="header">
        <div className="filter-wrapper">
          <NameFilter />
          <CategoryFilter onCategoryFilterChange={handleCategoryFilterChange} />
        </div>
        <CalendarButton />
      </header>
      <main className="main">
        <ul className="product-ul">{renderProducts()}</ul>
      </main>
    </div>
  );
}
