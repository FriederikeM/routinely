import NameFilter from "./NameFilter";
import CalendarButton from "./CalendarButton";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import FormModal from "../FormModal/FormModal";
import "./ProductList.css";
import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import { getProductsFilteredByNameandCategory } from "../../utility/getFilteredProducts";

export default function ProductList() {
  const products = useProducts();
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [nameFilter, setNameFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const [productName, setProductName] = useState("");
  const [conflicts, setConflicts] = useState([]);

  function handleCategoryFilterChange(categorySelected) {
    setCategoryFilter(categorySelected);
  }

  function handleNameFilterChange(nameInput) {
    setNameFilter(nameInput);
  }

  function handleAddToRoutine(id, name, conflicts) {
    setShowModal(true);
    setId(id);
    setProductName(name);
    setConflicts(conflicts);
  }

  function handleCancelAddToRoutine() {
    setShowModal(false);
  }

  function renderProducts() {
    const productsFilteredByNameandCategory = getProductsFilteredByNameandCategory(
      products,
      categoryFilter,
      nameFilter
    );
    return productsFilteredByNameandCategory.map((product) => {
      const { id, name, image, url, packaging, conflicts } = product;
      return (
        <li key={id}>
          <ProductCard
            name={name}
            image={image}
            url={url}
            packaging={packaging}
            onAddToRoutine={() => handleAddToRoutine(id, name, conflicts)}
          />
        </li>
      );
    });
  }

  const modalShown = showModal ? "not-modal" : "";

  return (
    <div className="ProductList">
      <div className={`wrapper ${modalShown}`}>
        <header className="header">
          <div className="filter-wrapper">
            <NameFilter onNameFilterChange={handleNameFilterChange} />
            <CategoryFilter
              onCategoryFilterChange={handleCategoryFilterChange}
            />
          </div>
          <CalendarButton />
        </header>
        <main className="main">
          <ul className="product-ul">{renderProducts()}</ul>
        </main>
      </div>
      {showModal && (
        <FormModal
          id={id}
          name={productName}
          conflicts={conflicts}
          products={products}
          onCancelAdding={handleCancelAddToRoutine}
        />
      )}
    </div>
  );
}
