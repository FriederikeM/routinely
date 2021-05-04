import "./AddedProductCard.css";
import { TiShoppingCart } from "react-icons/ti";
import bottleimg from "../../images/niacinamide-bottle.png";

import getProductsById from "../../utility/getProductsById";

export default function AddedProductCard({ info, products, name, time }) {
  let i;
  if (name === "Monday") {
    i = 0;
  } else if (name === "Tuesday") {
    i = 1;
  } else if (name === "Wednesday") {
    i = 2;
  } else if (name === "Thursday") {
    i = 3;
  } else if (name === "Friday") {
    i = 4;
  } else if (name === "Saturday") {
    i = 5;
  } else if (name === "Sunday") {
    i = 6;
  }

  const weekdayTime = info.filter((product) => {
    return product.days[i][time];
  });

  return (
    products.length > 0 &&
    weekdayTime.map((product) => {
      const productData = getProductsById(product.id, products);
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
