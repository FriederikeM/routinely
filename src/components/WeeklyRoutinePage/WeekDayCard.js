import "./WeekDayCard.css";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import getProductById from "../../utility/getProductById.js";
import { getProductsCheckedOnThisTimeOfDay } from "../../utility/getCheckedProducts";

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
          <ul className="product-name-list">
            {mornings.map((morning) => {
              return (
                <li className="product-name-left">
                  {getProductById(morning.id, products).name}
                </li>
              );
            })}
          </ul>
        </section>
        <section className="evening">
          <ul className="product-name-list">
            {evenings.map((evening) => {
              return (
                <li className="product-name-right">
                  {getProductById(evening.id, products).name}
                </li>
              );
            })}
          </ul>
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
