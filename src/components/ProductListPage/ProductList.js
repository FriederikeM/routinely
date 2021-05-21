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
   * returns a product card that holds all needed information about the product,
   * given by a database and filtered by name and category
   * maps over the filtered array to display all products the user wants to see
   */
  function renderProducts() {
    /**
     * list of products pulled from database filtered by name and category
     * @type {array<object>}
     */
    const productsFilteredByNameandCategory =
      getProductsFilteredByNameandCategory(
        products,
        categoryFilter,
        nameFilter
      );
    return productsFilteredByNameandCategory.map((product) => {
      /**
       * @type {object}
       * @property {number} id - product id
       * @property {string} name - product name
       * @property {string} image - product image link
       * @property {string} url - url that leads to the official product page where you can buy it
       * @property {string} packaging - type of container the product comes in
       * @property {array<number>} conflicts - array of ids (numbers) of products that have conflicting ingredients with the products that is being edited
       */

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

  /**
   * name for class the blurs the background if the modal is shown
   * @type {string}
   */
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
