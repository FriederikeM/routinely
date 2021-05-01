import "./WeeklyRoutine.css";
import WeekDayCard from "./WeekDayCard";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const routine = getDataFromLocalStorage();
    setAllItems(routine);
  }, []);

  const mondays = allItems.filter((item) => {
    return item.days[0].isChecked;
  });

  const tuesdays = allItems.filter((item) => {
    return item.days[1].isChecked;
  });

  const wednesdays = allItems.filter((item) => {
    return item.days[2].isChecked;
  });

  const thursdays = allItems.filter((item) => {
    return item.days[3].isChecked;
  });

  const fridays = allItems.filter((item) => {
    return item.days[4].isChecked;
  });

  const saturdays = allItems.filter((item) => {
    return item.days[5].isChecked;
  });

  const sundays = allItems.filter((item) => {
    return item.days[6].isChecked;
  });

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
