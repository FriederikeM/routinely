import Filter from "./Filter";
import "./ProductList.css";

export default function ProductList() {
  return (
    <div className="ProductList">
      <header>
        <Filter />
      </header>
    </div>
  );
}
