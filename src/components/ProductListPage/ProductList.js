import "./ProductList.css";

import NameFilter from "./NameFilter";
import CalendarButton from "./CalendarButton";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import FormModal from "../FormModal/FormModal";
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
  /**
   * when category is selected categoryFilter useState gets set to the value of the selected option
   * @type {function}
   * @param {string} categorySelected
   */

  function handleCategoryFilterChange(categorySelected) {
    setCategoryFilter(categorySelected);
  }

  /**
   * when name is typed into input, nameFilter useState gets set to the value of the input
   * @type {function}
   * @param {string} nameInput
   */

  function handleNameFilterChange(nameInput) {
    setNameFilter(nameInput);
  }

  /**
   * when plus button is clicked, modal pops up and th id, productName and conflicts useState get updated
   * @type {function}
   * @param {number} id - product id
   * @param {string} name - product name
   * @param {array<number>} conflicts - list of ids from products that conflict with the clicked product
   */

  function handleAddToRoutine(id, name, conflicts) {
    setShowModal(true);
    setId(id);
    setProductName(name);
    setConflicts(conflicts);
  }

  /**
   * when cancel is clicked, modal disappears
   * @type {function}
   */

  function handleCancelAddToRoutine() {
    setShowModal(false);
  }

  /**
   * @type {function}
   * @returns ProductCard with all relevant information
   */
  function renderProducts() {
    const productsFilteredByNameandCategory =
      getProductsFilteredByNameandCategory(
        products,
        categoryFilter,
        nameFilter
      );
    return productsFilteredByNameandCategory.map((product) => {
      const { id, name, image, url, packaging, conflicts } = product;
      return (
        <li key={id}>
          <ProductCard
            id={id}
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
          <h1 className="products-headline">Products</h1>
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
