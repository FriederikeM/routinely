import "./AddedProductCard.css";
import { TiShoppingCart } from "react-icons/ti";
import { getClassForAddedPackaging } from "../../utility/getClassesForSizingAndPositioning";

export default function AddedProductCard({
  packaging,
  name,
  date,
  expirationPeriod,
  imgSource,
  url,
  onEditRoutine,
}) {
  const classForPackaging = getClassForAddedPackaging(packaging, name);

  return (
    <div className="AddedProductCard">
      <h5 className="added-product-name">{name}</h5>
      <div className="time-details">
        {date !== "" && <p>opened: {date}</p>}
        <p>lasts: {expirationPeriod}</p>
      </div>
      <p className="restock">
        running low?{" "}
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="shopping-link"
        >
          <TiShoppingCart className="shopping-cart-icon" />{" "}
        </a>
      </p>
      <button className="edit-button" onClick={onEditRoutine}>
        edit
      </button>
      <img
        src={imgSource}
        alt="product bottle"
        className={`added-bottle-image ${classForPackaging}`}
      ></img>
    </div>
  );
}
