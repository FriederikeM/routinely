import "./SingleProduct.css";
import { useParams, useHistory } from "react-router";
import useProducts from "../../hooks/useProducts";
import getProductById from "../../utility/getProductById";
import { FaRegSnowflake, FaArrowLeft } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import React from "react";

export default function SingleProduct() {
  const { singleProductId } = useParams();
  const products = useProducts();
  const history = useHistory();

  if (products.length === 0) {
    return <p>loading</p>;
  }

  /**
   * @type {object}
   * @property {string} name - product name
   * @property {string} image - product image link
   * @property {array<string>} ingredients - product ingredients
   * @property {string} time - info at what time of day this product should preferably be used
   * @property {array<string>} goals - description of which skin conditions this products helps with
   * @property {boolean} refrigeration - info about whether or not this product should be kept in the refrigerator
   */

  const productInfo = getProductById(Number(singleProductId), products);
  const { name, image, ingredients, time, refrigeration, goals } = productInfo;

  const classForTonerImage = Number(singleProductId) === 2 ? "toner-image" : "";

  return (
    <div className="SingleProduct">
      <img
        src={image}
        alt={productInfo}
        className={`single-product-image ${classForTonerImage}`}
      />
      <h3 className="single-product-name">{name}</h3>
      <div className="single-product-info">
        {refrigeration && (
          <span className="single-product-refrigeration">
            <span className="single-product-refrigeration-icon">
              <FaRegSnowflake />
            </span>
            <span className="single-product-refrigeration-text">
              Please refrigerate
            </span>
          </span>
        )}
        {time.length > 0 && (
          <span className="single-product-time">
            <span className="single-product-time-icon">
              <BsFillClockFill />
            </span>
            <span className="single-product-time-text">{time.join(", ")}</span>
          </span>
        )}
        <ul className="single-product-goal-list">
          {goals.map((goal, index) => {
            return <li key={index}>{goal}</li>;
          })}
        </ul>
        <div className="single-product-ingredients">
          <h4>Ingredients</h4>
          <p className="single-product-ingredients-list">
            {[
              ingredients.slice(0, -1).join(", "),
              ingredients.slice(-1)[0],
            ].join(ingredients.length < 2 ? " " : " and ")}
          </p>
        </div>
      </div>
      <button
        className="single-product-back-button"
        onClick={() => history.goBack()}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
}
