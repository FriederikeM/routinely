import "./WeekDayCard.css";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { getProductsCheckedOnThisTimeOfDay } from "../../utility/getCheckedProducts";
import TimeOfDayProducts from "./TimeOfDayProducts";
import PropTypes from "prop-types";

WeekDayCard.propTypes = {
  name: PropTypes.string,
  data: PropTypes.array,
  products: PropTypes.array,
};

export default function WeekDayCard({ name, data, products }) {
  const mornings = getProductsCheckedOnThisTimeOfDay(name, data, "morning");
  const evenings = getProductsCheckedOnThisTimeOfDay(name, data, "evening");

  return (
    <div className="WeekDayCard">
      <h4 className="weekday-headline">{name}</h4>
      <div className="weekday-box">
        <div className="weekday-box-header">
          <HiSun className="sun" />
          <FaMoon />
        </div>
        <section className="morning">
          <TimeOfDayProducts
            products={mornings}
            productDB={products}
            className="product-name-left"
          />
        </section>
        <section className="evening">
          <TimeOfDayProducts
            products={evenings}
            productDB={products}
            className="product-name-right"
          />
        </section>
        <div className="see-details-button-wrapper">
          <NavLink
            to={`/weekly-routine/${name}`}
            className="see-details-button-link"
          >
            <button className="see-details-button">See Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
