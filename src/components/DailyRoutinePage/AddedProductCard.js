import "./AddedProductCard.css";
import { TiShoppingCart } from "react-icons/ti";
import bottleimg from "../../images/niacinamide-bottle.png";

export default function AddedProductCard() {
  return (
    <div className="AddedProductCard">
      <h5>Niacinamide 10% + Zinc 1%</h5>
      <p>opened: february</p>
      <p>lasts: 12 months</p>
      <p>
        running low? <TiShoppingCart />{" "}
      </p>
      <button className="edit-button">edit</button>
      <img src={bottleimg} alt="product bottle" width="100px"></img>
    </div>
  );
}
