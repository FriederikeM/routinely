import NameFilter from "./NameFilter";
import CalendarButton from "./CalendarButton";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import "./ProductList.css";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

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

  function renderProducts() {
    return products.map((product) => {
      const { id, name, image, url } = product;
      return (
        <li key={id}>
          <ProductCard name={name} image={image} url={url} />
        </li>
      );
    });
  }

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
        <ul className="product-ul">{renderProducts()}</ul>
      </main>
    </div>
  );
}
