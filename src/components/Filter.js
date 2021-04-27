import "./Filter.css";

export default function Filter() {
  return (
    <div className="Filter">
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
          Go
        </button>
      </form>
    </div>
  );
}
