import "./TimeOfDayProducts.css";
import getProductById from "../../utility/getProductById";
import PropTypes from "prop-types";

TimeOfDayProducts.propTypes = {
  products: PropTypes.array,
  productDB: PropTypes.array,
  className: PropTypes.string,
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
