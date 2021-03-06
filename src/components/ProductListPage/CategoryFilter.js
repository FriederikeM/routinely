import "./CategoryFilter.css";
import PropTypes from "prop-types";
import React from "react";

CategoryFilter.propTypes = {
  onCategoryFilterChange: PropTypes.func.isRequired,
};

export default function CategoryFilter({ onCategoryFilterChange }) {
  function handleCategoryFilterClick(event) {
    const categoryFilterValue = event.target.value;
    onCategoryFilterChange(categoryFilterValue);
  }

  return (
    <div className="CategoryFilter">
      <select
        name="category"
        id="category"
        className="category-search-bar"
        onChange={handleCategoryFilterClick}
      >
        <option disabled selected className="label" value="All">
          Categories
        </option>
        <option value="All">All</option>
        <option value="Exfoliators">Exfoliators</option>
        <option value="Toners">Toners</option>
        <option value="Serums">Serums</option>
        <option value="Suncare">Suncare</option>
        <option value="Face Oils">Face Oils</option>
        <option value="Face Masks">Face Masks</option>
        <option value="Moisturizers">Moisturizers</option>
        <option value="Cleansers">Cleansers</option>
        <option value="Eye Serums">Eye Serums</option>
      </select>
    </div>
  );
}
