import NameFilter from "./NameFilter";
import CalendarButton from "./CalendarButton";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import "./ProductList.css";
import { useEffect } from "react";

export default function ProductList() {
  const getData = () => {
    fetch("products.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
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
