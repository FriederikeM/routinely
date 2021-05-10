import "./ProductCard.css";
import { useEffect, useState } from "react";

export default function ProductCard({
  name,
  image,
  url,
  packaging,
  onAddToRoutine,
}) {
  const [classForImage, setClassForImage] = useState("");

  useEffect(() => {
    if (packaging === "not glass bottle") {
      setClassForImage("smaller-image");
    } else if (packaging === "glass container") {
      setClassForImage("powder");
    }
  }, [packaging]);

  return (
    <div className="ProductCard">
      <h5 className="ProductCard__headline">{name}</h5>
      <img
        src={image}
        alt={`white product bottle of ${name}`}
        className={`bottle-image ${classForImage}`}
      />
      <a href={url} className="details-link" target="_blank" rel="noreferrer">
        details
      </a>
      <button
        className={name.length > 45 ? "long-name" : "add-to-routine-button"}
        onClick={onAddToRoutine}
      >
        +
      </button>
    </div>
  );
}
