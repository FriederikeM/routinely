import "./WeekDayCard.css";
import { HiSun } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";

export default function WeekDayCard({ name, data, products }) {
  let mornings;
  if (name === "Monday") {
    mornings = data.filter((monday) => {
      return monday.days[0].morning;
    });
  } else if (name === "Tuesday") {
    mornings = data.filter((tuesday) => {
      return tuesday.days[1].morning;
    });
  } else if (name === "Wednesday") {
    mornings = data.filter((wednesday) => {
      return wednesday.days[2].morning;
    });
  } else if (name === "Thursday") {
    mornings = data.filter((thursday) => {
      return thursday.days[3].morning;
    });
  } else if (name === "Friday") {
    mornings = data.filter((friday) => {
      return friday.days[4].morning;
    });
  } else if (name === "Saturday") {
    mornings = data.filter((saturday) => {
      return saturday.days[5].morning;
    });
  } else if (name === "Sunday") {
    mornings = data.filter((sunday) => {
      return sunday.days[6].morning;
    });
  }

  let evenings;
  if (name === "Monday") {
    evenings = data.filter((monday) => {
      return monday.days[0].evening;
    });
  } else if (name === "Tuesday") {
    evenings = data.filter((tuesday) => {
      return tuesday.days[1].evening;
    });
  } else if (name === "Wednesday") {
    evenings = data.filter((wednesday) => {
      return wednesday.days[2].evening;
    });
  } else if (name === "Thursday") {
    evenings = data.filter((thursday) => {
      return thursday.days[3].evening;
    });
  } else if (name === "Friday") {
    evenings = data.filter((friday) => {
      return friday.days[4].evening;
    });
  } else if (name === "Saturday") {
    evenings = data.filter((saturday) => {
      return saturday.days[5].evening;
    });
  } else if (name === "Sunday") {
    evenings = data.filter((sunday) => {
      return sunday.days[6].evening;
    });
  }

  function getProductsById(id) {
    const foundProduct = products.filter((product) => {
      return product.id === id;
    });
    return foundProduct[0].name;
  }

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
