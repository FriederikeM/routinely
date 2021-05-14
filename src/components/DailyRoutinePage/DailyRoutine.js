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

  const modalShown = showModal ? "not-modal" : "";

  function renderMorningAddedProductCard() {
    return productsMorning.map((product) => {
      const productData = getProductById(product.id, products);
      return (
        <AddedProductCard
          name={productData.name}
          date={product.date}
          expirationPeriod={productData.expirationPeriod}
          packaging={productData.packaging}
          imgSource={productData.image}
          url={productData.url}
          onEditRoutine={() =>
            handleEditRoutine(
              product.id,
              productData.name,
              productData.conflicts
            )
          }
        />
      );
    });
  }

  function renderEveningAddedProductCard() {
    return productsEvening.map((product) => {
      const productData = getProductById(product.id, products);
      return (
        <AddedProductCard
          name={productData.name}
          date={product.date}
          expirationPeriod={productData.expirationPeriod}
          packaging={productData.packging}
          imgSource={productData.image}
          url={productData.url}
          onEditRoutine={() =>
            handleEditRoutine(
              product.id,
              productData.name,
              productData.conflicts
            )
          }
        />
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
              <h2 className="daytime-headline">morning</h2>
              <article className="morning-products-list">
                {products.length > 0 && renderMorningAddedProductCard()}
              </article>
            </section>
            <section className="evening-products-display">
              <h2 className="daytime-headline">evening</h2>
              <article className="evening-products-list">
                {products.length > 0 && renderEveningAddedProductCard()}
              </article>
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
