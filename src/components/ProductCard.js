import "./ProductCard.css";
import { useEffect, useState } from "react";

export default function ProductCard({ name, image, url }) {
  const [classForImage, setClassForImage] = useState("");

  useEffect(() => {
    if (name === "Glycolic Acid 7% Toning Solution") {
      setClassForImage("smaller-image");
    } else if (name === "Azelaic Acid Suspension 10%") {
      setClassForImage("smaller-image");
    } else if (name === "Mineral UV Filters SPF 30 with Antioxidants") {
      setClassForImage("smaller-image");
    } else if (name === "Vitamin C Suspension 23% + HA Spheres 2%") {
      setClassForImage("smaller-image");
    } else if (name === "Vitamin C Suspension 30% in Silicone") {
      setClassForImage("smaller-image");
    } else if (name === "Mineral UV Filters SPF 15 with Antioxidants") {
      setClassForImage("smaller-image");
    } else if (name === "Magnesium Ascorbyl Phosphate 10%") {
      setClassForImage("smaller-image");
    } else if (name === "Salicylic Acid 2% Masque") {
      setClassForImage("smaller-image");
    } else if (name === "Natural Moisturizing Factors + HA") {
      setClassForImage("smaller-image");
    } else if (name === "Squalane Cleanser") {
      setClassForImage("smaller-image");
    } else if (name === "100% Niacinamide Powder") {
      setClassForImage("powder");
    } else if (name === "100% L-Ascorbic Acid Powder") {
      setClassForImage("powder");
    }
  }, [classForImage, name]);

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
