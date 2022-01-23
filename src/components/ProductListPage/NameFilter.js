import "./NameFilter.css";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import React from "react";

NameFilter.propTypes = {
  onNameFilterChange: PropTypes.func.isRequired,
};

export default function NameFilter({ onNameFilterChange }) {
  function handleNameFilterChange(event) {
    event.preventDefault();
    const nameFilterValue = event.target.value;
    onNameFilterChange(nameFilterValue);
  }

  return (
    <div className="NameFilter">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Search for a product"
        aria-label="name search input"
        className="name-search-bar"
        autoComplete="off"
        onChange={handleNameFilterChange}
      />
      <div
        type="submit"
        aria-label="name search submit"
        className="name-search-button"
      >
        <FaSearch />
      </div>
    </div>
  );
}
