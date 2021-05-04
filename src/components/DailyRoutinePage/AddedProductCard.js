import "./AddedProductCard.css";
import { TiShoppingCart } from "react-icons/ti";
import getProductById from "../../utility/getProductById.js";
import getIndexForWeekday from "../../utility/getIndexForWeekday";

export default function AddedProductCard({
  productsOfTheDay,
  products,
  nameOfTheWeekday,
  timeOfTheDay,
}) {
  const i = getIndexForWeekday(nameOfTheWeekday);

  const productsOfTimeOfDay = productsOfTheDay.filter((product) => {
    return product.days[i][timeOfTheDay];
  });

  function getClassForPackaging(packaging) {
    if (packaging === "not glass bottle") {
      return "smaller-added-image";
    } else if (packaging === "glass container") {
      return "added-powder-image";
    }
  }

  return (
    products.length > 0 &&
    productsOfTimeOfDay.map((product) => {
      const productData = getProductById(product.id, products);
      return (
        <div className="AddedProductCard">
          <h5 className="added-product-name">{productData.name}</h5>
          <div className="time-details">
            {product.date !== "" && <p>opened: {product.date}</p>}
            <p>lasts: {productData.expirationPeriod}</p>
          </div>
          <p className="restock">
            running low?{" "}
            <a
              href={productData.url}
              target="_blank"
              rel="noreferrer"
              className="shopping-link"
            >
              <TiShoppingCart className="shopping-cart-icon" />{" "}
            </a>
          </p>
          <button className="edit-button">edit</button>
          <img
            src={productData.image}
            alt="product bottle"
            className={`added-bottle-image ${getClassForPackaging(
              productData.packaging
            )}`}
          ></img>
        </div>
      );
    })
  );
}
