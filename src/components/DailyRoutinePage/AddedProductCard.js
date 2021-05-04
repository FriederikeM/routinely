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

  const openingDate = info.filter((product) => {
    return product.date;
  });

  console.log(products);

  return (
    products.length > 0 &&
    weekdayTime.map((time) => {
      return (
        <div className="AddedProductCard">
          <h5 className="added-product-name">
            {getProductsById(time.id, products).name}
          </h5>
          <div className="time-details">
            {openingDate !== "" && <p>opened: {openingDate}</p>}
            <p>lasts: {getProductsById(time.id, products).expirationPeriod}</p>
          </div>
          <p className="restock">
            running low? <TiShoppingCart className="shopping-cart-icon" />{" "}
          </p>
          <button className="edit-button">edit</button>
          <img
            src={bottleimg}
            alt="product bottle"
            className="added-bottle-image"
          ></img>
        </div>
      );
    })
  );
}
