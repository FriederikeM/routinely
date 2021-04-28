import NameFilter from "./NameFilter";
import CalendarButton from "./CalendarButton";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import FormModal from "./FormModal";
import "./ProductList.css";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [nameFilter, setNameFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  function handleNameFilterChange(nameInput) {
    setNameFilter(nameInput);
  }

  function handleAddToRoutine(id) {
    setShowModal(true);
  }

  function handleCancelAddToRoutine() {
    setShowModal(false);
  }

  function renderProducts() {
    return products
      .filter((product) => {
        return product.category === categoryFilter || categoryFilter === "All";
      })
      .filter((product) => {
        if (nameFilter) {
          return product.name.toLowerCase().includes(nameFilter.toLowerCase());
        } else {
          return true;
        }
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
              onAddToRoutine={() => handleAddToRoutine(id)}
            />
          </li>
        );
      });
  }

  return (
    <div className="ProductList">
      {showModal && <FormModal onCancelAdding={handleCancelAddToRoutine} />}
      <header className="header">
        <div className="filter-wrapper">
          <NameFilter onNameFilterChange={handleNameFilterChange} />
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
