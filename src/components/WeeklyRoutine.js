import "./WeeklyRoutine.css";
import WeekDayCard from "./WeekDayCard";
import { NavLink } from "react-router-dom";
import { getDataFromLocalStorage } from "../utility/localStorage";
import { useEffect } from "react";

export default function WeeklyRoutine() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      return fetch("products.json")
        .then((response) => response.json())
        .then((productData) => {
          setProducts(productData);
    });
    };
    fetchProducts();
  }, []);
  }, []);

  return (
    <div className="WeeklyRoutine">
      <header>
        <div className="headline-wrapper">
          <h1 className="headline">my week</h1>
        </div>
      </header>
      <main className="weekly-main">
        <WeekDayCard name="monday" />
        <WeekDayCard name="tuesday" />
        <WeekDayCard name="wednesday" />
        <WeekDayCard name="thursday" />
        <WeekDayCard name="friday" />
        <WeekDayCard name="saturday" />
        <WeekDayCard name="sunday" />
        <NavLink to="/products" className="add-button-weekly">
          +
        </NavLink>
      </main>
    </div>
  );
}
