import "./NameFilter.css";
import { FaSearch } from "react-icons/fa";

export default function NameFilter() {
  return (
    <div className="NameFilter">
      <form className="filter-form">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Search for a product"
          aria-label="name search input"
          className="name-search-bar"
        />
        <button
          type="submit"
          aria-label="name search submit"
          className="name-search-button"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
}
