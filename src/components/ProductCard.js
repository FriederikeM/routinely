import "./ProductCard.css";
import { useEffect, useState } from "react";

export default function ProductCard({ name, image, url, packaging }) {
  const [classForImage, setClassForImage] = useState("");

  useEffect(() => {
    if (packaging === "not glass bottle") {
      setClassForImage("smaller-image");
    } else if (packaging === "glass container") {
      setClassForImage("powder");
    }
  }, [classForImage, packaging]);

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
      <button className="add-to-routine-button">+</button>
    </div>
  );
}
