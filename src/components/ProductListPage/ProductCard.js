import "./ProductCard.css";
import { getClassForListedPackaging } from "../../utility/getClassesForSizingAndPositioning";
import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  packaging: PropTypes.string.isRequired,
  onAddToRoutine: PropTypes.func.isRequired,
};

export default function ProductCard({
  name,
  image,
  id,
  packaging,
  onAddToRoutine,
}) {
  const classForPackaging = getClassForListedPackaging(packaging);

  return (
    <div className="ProductCard">
      <h5 className="ProductCard-headline">{name}</h5>
      <img
        src={image}
        alt={`white product bottle of ${name}`}
        className={`bottle-image ${classForPackaging}`}
        loading="lazy"
      />
      <NavLink to={`/products/${id}`} className="details-link">
        details
      </NavLink>
      <button
        className={name.length > 45 ? "long-name" : "add-to-routine-button"}
        onClick={onAddToRoutine}
      >
        <FaPlus />
      </button>
    </div>
  );
}
