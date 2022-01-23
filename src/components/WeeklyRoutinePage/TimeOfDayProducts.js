import "./TimeOfDayProducts.css";
import getProductById from "../../utility/getProductById";
import PropTypes from "prop-types";
import React from "react";

TimeOfDayProducts.propTypes = {
  products: PropTypes.array.isRequired,
  productDB: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};

export default function TimeOfDayProducts({ products, productDB, className }) {
  return (
    <ul className="product-name-list">
      {products.map((product) => {
        return (
          <li className={className} key={product.id}>
            {getProductById(product.id, productDB).name}
          </li>
        );
      })}
    </ul>
  );
}
