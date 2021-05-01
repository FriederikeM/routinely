import "./WeekDayCard.css";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";

export default function WeekDayCard({ name, data, products }) {
  return (
    <div className="WeekDayCard">
      <div className="weekday">
        <h4 className="weekday-headline">{name}</h4>
        <div className="weekday-box">
          <div className="weekday-box-header">
            <HiSun className="sun" />
            <FaMoon />
          </div>
          <section className="morning">
            <ul className="product-name-list">
              <li className="product-name-left">Niacinamide 10% + Zinc 1%</li>
              <li className="product-name-left">Azelaic Acid Suspension 10%</li>
              <li className="product-name-left">Hyaluronic Acid 2% + B5</li>
              <li className="product-name-left">
                Natural Moisturizing Factors + HA
              </li>
              <li className="product-name-left">
                Mineral UV Filters SPF 30 with Antioxidants
              </li>
            </ul>
          </section>
          <section className="evening">
            <ul className="product-name-list">
              <li className="product-name-right">Squalane Cleanser</li>
              <li className="product-name-right">Argireline Solution 10%</li>
              <li className="product-name-right">Hyaluronic Acid 2% + B5</li>
              <li className="product-name-right">
                Natural Moisturizing Factors + HA
              </li>
              <li className="product-name-right">
                100% Organic Cold-Pressed Rose Hip Seed Oil
              </li>
            </ul>
          </section>
          <div className="see-details-button-wrapper">
            <button className="see-details-button">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
