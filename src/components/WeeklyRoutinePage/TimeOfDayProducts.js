import "./TimeOfDayProducts.css";
import getProductById from "../../utility/getProductById";

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