import "./DailyRoutine.css";
import AddedProductCard from "./AddedProductCard.js";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import FormModal from "../FormModal/FormModal";
import getProductById from "../../utility/getProductById";
import useProducts from "../../hooks/useProducts";
import useRoutine from "../../hooks/useRoutine";
import {
  getProductsCheckedOnThisDay,
  getProductsCheckedOnThisTimeOfDay,
} from "../../utility/getCheckedProducts";

export default function DailyRoutine() {
  const { weekday } = useParams();
  const history = useHistory();
  const allRoutineItems = useRoutine();
  const products = useProducts();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const [productName, setProductName] = useState("");
  const [conflicts, setConflicts] = useState([]);

  /**
   * Array of products that are used on the day that is determined by the useParams
   * @type {array<object>}
   */

  const productsUsedThatDay = getProductsCheckedOnThisDay(
    weekday,
    allRoutineItems
  );

  /**
   * Array of products that are used in the morning on the day that is determined by the useParams
   * @type {array<object>}
   */

  const productsMorning = getProductsCheckedOnThisTimeOfDay(
    weekday,
    productsUsedThatDay,
    "morning"
  );

  /**
   * Array of products that are used in the evening on the day that is determined by the useParams
   * @type {array<object>}
   */

  const productsEvening = getProductsCheckedOnThisTimeOfDay(
    weekday,
    productsUsedThatDay,
    "evening"
  );

  /**
   * updates useStates for the id, name and conflicts and also makes the modal show up, by setting the respective state to true
   * @type {function}
   * @param {number} id - id of the product that is being edited
   * @param {string} name - name of the product that is being edited
   * @param {array} conflicts - array of ids (numbers) of products that have conflicting ingredients with the products that is being edited
   */

  function handleEditRoutine(id, name, conflicts) {
    setId(id);
    setProductName(name);
    setConflicts(conflicts);
    setShowModal(true);
  }

  /**
   * makes the modal disappear by setting the showModal state to false
   * @type {function}
   */

  function handleCancelAddToRoutine() {
    setShowModal(false);
  }

  /**
   * class that is being added to everything outside the modal to blur the background when modal shows up
   * @type {string}
   */

  const modalShown = showModal ? "not-modal" : "";

  /**
   * @type {function}
   * returns a product card that holds all needed information about the product, some given by a database (productInfo) and some given by the user (productsMorning)
   * maps over the productsMorning array to display all products that are used during the morning of the day specified by useParams
   */

  function renderMorningAddedProductCard() {
    return productsMorning.map((morningProduct) => {
      /**
       * @type {object}
       * @property {number} id - product id
       * @property {string} name - product name
       * @property {string} expirationPeriod - time the product lasts once opened
       * @property {string} packaging - type of container the product comes in
       * @property {string} image - product image
       * @property {string} url - url that leads to the official product page where you can buy it
       * @property {array<number>} conflicts - array of ids (numbers) of products that have conflicting ingredients with the products that is being edited
       */

      const productInfo = getProductById(morningProduct.id, products);
      return (
        <li className="added-product-list-item" key={morningProduct.id}>
          <AddedProductCard
            name={productInfo.name}
            date={morningProduct.date}
            expirationPeriod={productInfo.expirationPeriod}
            packaging={productInfo.packaging}
            imgSource={productInfo.image}
            url={productInfo.url}
            onEditRoutine={() =>
              handleEditRoutine(
                morningProduct.id,
                productInfo.name,
                productInfo.conflicts
              )
            }
          />
        </li>
      );
    });
  }

  /**
   * @type {function}
   * returns a product card that holds all needed information about the product, some given by a database (productInfo) and some given by the user (productsEvening)
   * maps over the productsEvening array to display all products that are used during the evening of the day specified by useParams
   */
  function renderEveningAddedProductCard() {
    return productsEvening.map((eveningProduct) => {
      /**
       * @type {object}
       * @property {number} id - product id
       * @property {string} name - product name
       * @property {string} expirationPeriod - time the product lasts once opened
       * @property {string} packaging - type of container the product comes in
       * @property {string} image - product image
       * @property {string} url - url that leads to the official product page where you can buy it
       * @property {array<number>} conflicts - array of ids (numbers) of products that have conflicting ingredients with the products that is being edited
       */
      const productInfo = getProductById(eveningProduct.id, products);
      return (
        <li className="added-product-list-item" key={eveningProduct.id}>
          <AddedProductCard
            name={productInfo.name}
            date={eveningProduct.date}
            expirationPeriod={productInfo.expirationPeriod}
            packaging={productInfo.packging}
            imgSource={productInfo.image}
            url={productInfo.url}
            onEditRoutine={() =>
              handleEditRoutine(
                eveningProduct.id,
                productInfo.name,
                productInfo.conflicts
              )
            }
          />
        </li>
      );
    });
  }

  return (
    <div className="DailyRoutine">
      <div className={modalShown}>
        <header className="daily-header">
          <div className="daily-headline-wrapper">
            <h1 className="daily-headline">{weekday}</h1>
          </div>
          <button className="history-back" onClick={() => history.goBack()}>
            <FaArrowLeft />
          </button>
        </header>
        {allRoutineItems !== [] && (
          <main className="daily-main">
            <section className="morning-products-display">
              <h2 className="daytime-headline">Morning</h2>
              <ul className="morning-products-list">
                {products.length > 0 && renderMorningAddedProductCard()}
              </ul>
            </section>
            <section className="evening-products-display">
              <h2 className="daytime-headline">Evening</h2>
              <ul className="evening-products-list">
                {products.length > 0 && renderEveningAddedProductCard()}
              </ul>
            </section>
          </main>
        )}
      </div>
      {showModal && (
        <FormModal
          conflicts={conflicts}
          id={id}
          name={productName}
          products={products}
          onCancelAdding={handleCancelAddToRoutine}
        />
      )}
    </div>
  );
}
