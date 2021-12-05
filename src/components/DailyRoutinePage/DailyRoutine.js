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
  const { allRoutineItems, syncRoutine } = useRoutine();
  const products = useProducts();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();
  const [productName, setProductName] = useState("");
  const [conflicts, setConflicts] = useState([]);

  const productsUsedThatDay = getProductsCheckedOnThisDay(
    weekday,
    allRoutineItems
  );

  const productsMorning = getProductsCheckedOnThisTimeOfDay(
    weekday,
    productsUsedThatDay,
    "morning"
  );

  const productsEvening = getProductsCheckedOnThisTimeOfDay(
    weekday,
    productsUsedThatDay,
    "evening"
  );

  function handleEditRoutine(id, name, conflicts) {
    setId(id);
    setProductName(name);
    setConflicts(conflicts);
    setShowModal(true);
  }

  function handleCancelAddToRoutine() {
    setShowModal(false);
  }

  function submitEditRoutine() {
    syncRoutine();
  }

  const modalShown = showModal ? "daily-not-modal" : "";

  /**
   * @type {function}
   * returns a product card that holds all needed information about the product,
   * some given by a database (productInfo) and some given by the user (productsMorning)
   * maps over the productsMorning array to display all products that are used during
   * the morning of the day specified by useParams
   */

  function renderMorningAddedProductCard() {
    return productsMorning.map((morningProduct) => {
      const productInfo = getProductById(morningProduct.id, products);
      const { name, expirationPeriod, packaging, image, url, conflicts } =
        productInfo;
      return (
        <li className="added-product-list-item" key={morningProduct.id}>
          <AddedProductCard
            name={name}
            date={morningProduct.date}
            expirationPeriod={expirationPeriod}
            packaging={packaging}
            imgSource={image}
            url={url}
            onEditRoutine={() =>
              handleEditRoutine(morningProduct.id, name, conflicts)
            }
          />
        </li>
      );
    });
  }

  /**
   * @type {function}
   * returns a product card that holds all needed information about the product,
   * some given by a database (productInfo) and some given by the user (productsEvening)
   * maps over the productsEvening array to display all products that are used during the
   * evening of the day specified by useParams
   */
  function renderEveningAddedProductCard() {
    return productsEvening.map((eveningProduct) => {
      const productInfo = getProductById(eveningProduct.id, products);
      const { name, expirationPeriod, packaging, image, url, conflicts } =
        productInfo;
      return (
        <li className="added-product-list-item" key={eveningProduct.id}>
          <AddedProductCard
            name={name}
            date={eveningProduct.date}
            expirationPeriod={expirationPeriod}
            packaging={packaging}
            imgSource={image}
            url={url}
            onEditRoutine={() =>
              handleEditRoutine(eveningProduct.id, name, conflicts)
            }
          />
        </li>
      );
    });
  }

  return (
    <div className="DailyRoutine">
      <div>
        <header className="daily-header">
          <div className="daily-headline-wrapper">
            <h1 className="daily-headline">{weekday}</h1>
          </div>
          <button className="history-back" onClick={() => history.goBack()}>
            <FaArrowLeft />
          </button>
        </header>
        {allRoutineItems !== [] && (
          <main className={`daily-main ${modalShown}`}>
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
          onEditRoutine={submitEditRoutine}
        />
      )}
    </div>
  );
}
