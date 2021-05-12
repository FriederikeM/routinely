import "./WeeklyRoutine.css";
import WeekDayCard from "./WeekDayCard";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../utility/localStorage";
import useProducts from "../../hooks/useProducts";
import { getProductsCheckedOnThisDay } from "../../utility/getCheckedProducts";

export default function WeeklyRoutine() {
  const [allItems, setAllItems] = useState([]);
  const products = useProducts();

  useEffect(() => {
    const routine = getDataFromLocalStorage();
    setAllItems(routine);
  }, []);

  const mondays = getProductsCheckedOnThisDay("Monday", allItems);
  const tuesdays = getProductsCheckedOnThisDay("Tuesday", allItems);
  const wednesdays = getProductsCheckedOnThisDay("Wednesday", allItems);
  const thursdays = getProductsCheckedOnThisDay("Thursday", allItems);
  const fridays = getProductsCheckedOnThisDay("Friday", allItems);
  const saturdays = getProductsCheckedOnThisDay("Saturday", allItems);
  const sundays = getProductsCheckedOnThisDay("Sunday", allItems);

  return (
    <div className="WeeklyRoutine">
      <header>
        <div className="weekly-headline-wrapper">
          <h1 className="weekly-headline">my week</h1>
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
