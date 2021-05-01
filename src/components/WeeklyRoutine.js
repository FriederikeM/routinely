import "./WeeklyRoutine.css";
import WeekDayCard from "./WeekDayCard";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../utility/localStorage";
import { useEffect } from "react";

export default function WeeklyRoutine() {
  const [allItems, setAllItems] = useState([]);
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
        {products.length > 0 && (
          <div>
            {mondays.length > 0 && (
              <WeekDayCard name="Monday" data={mondays} products={products} />
            )}
            {tuesdays.length > 0 && (
              <WeekDayCard name="Tuesday" data={tuesdays} products={products} />
            )}
            {wednesdays.length > 0 && (
              <WeekDayCard
                name="Wednesday"
                data={wednesdays}
                products={products}
              />
            )}
            {thursdays.length > 0 && (
              <WeekDayCard
                name="Thursday"
                data={thursdays}
                products={products}
              />
            )}
            {fridays.length > 0 && (
              <WeekDayCard name="Friday" data={fridays} products={products} />
            )}
            {saturdays.length > 0 && (
              <WeekDayCard
                name="Saturday"
                data={saturdays}
                products={products}
              />
            )}
            {sundays.length > 0 && (
              <WeekDayCard name="Sunday" data={sundays} products={products} />
            )}
          </div>
        )}
        <NavLink to="/products" className="add-button-weekly">
          +
        </NavLink>
      </main>
    </div>
  );
}
