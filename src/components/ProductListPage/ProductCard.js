import "./ProductCard.css";
import { getClassForListedPackaging } from "../../utility/getClassesForSizingAndPositioning";
import { FaPlus } from "react-icons/fa";
export default function ProductCard({
  name,
  image,
  url,
  packaging,
  onAddToRoutine,
}) {
  const classForPackaging = getClassForListedPackaging(packaging);

  return (
    <div className="ProductCard">
      <h5 className="ProductCard__headline">{name}</h5>
      <img
        src={image}
        alt={`white product bottle of ${name}`}
        className={`bottle-image ${classForPackaging}`}
      />
      <a href={url} className="details-link" target="_blank" rel="noreferrer">
        details
      </a>
      <button
        className={name.length > 45 ? "long-name" : "add-to-routine-button"}
        onClick={onAddToRoutine}
      >
        <FaPlus />
      </button>
    </div>
  );
}
