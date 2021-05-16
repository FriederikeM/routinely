import { useParams, useHistory } from "react-router";
import useProducts from "../../hooks/useProducts";
import getProductById from "../../utility/getProductById";
import { FaRegSnowflake, FaArrowLeft } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";

export default function SingleProduct() {
  const { singleProductId } = useParams();
  const products = useProducts();
  const history = useHistory();

  if (products.length !== 0) {
    const productInfo = getProductById(Number(singleProductId), products);
    const { name, image, ingredients, time, refrigeration } = productInfo;

    const classForTonerImage =
      name === "Glycolic Acid 7% Toning Solution" ? "toner-image" : "";
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
            <p className="single-product-refrigeration">
              <span className="single-product-refrigeration-icon">
                <FaRegSnowflake />
              </span>{" "}
              <span className="single-product-refrigeration-text">
                Please refrigerate{" "}
              </span>
            </p>
          )}
          {time.length > 0 && (
            <p className="single-product-time">
              <span className="single-product-time-icon">
                <BsFillClockFill />
              </span>{" "}
              <span className="single-product-time-text">{time}</span>
            </p>
          )}
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
  } else {
    return "loading";
  }
}
