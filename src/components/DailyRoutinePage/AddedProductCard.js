import "./AddedProductCard.css";
import { TiShoppingCart } from "react-icons/ti";
import bottleimg from "../../images/niacinamide-bottle.png";

export default function AddedProductCard() {
  return (
    <div className="AddedProductCard">
      <h5 className="added-product-name">Niacinamide 10% + Zinc 1%</h5>
      <div className="time-details">
        <p>opened: february</p>
        <p>lasts: 12 months</p>
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
}
