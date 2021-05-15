import "./WeeklyRoutine.css";
import WeekDayCard from "./WeekDayCard";
import { NavLink } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { getProductsCheckedOnThisDay } from "../../utility/getCheckedProducts";
import useRoutine from "../../hooks/useRoutine";

export default function WeeklyRoutine() {
  const allRoutineItems = useRoutine();
  const products = useProducts();

  const mondays = getProductsCheckedOnThisDay("Monday", allRoutineItems);
  const tuesdays = getProductsCheckedOnThisDay("Tuesday", allRoutineItems);
  const wednesdays = getProductsCheckedOnThisDay("Wednesday", allRoutineItems);
  const thursdays = getProductsCheckedOnThisDay("Thursday", allRoutineItems);
  const fridays = getProductsCheckedOnThisDay("Friday", allRoutineItems);
  const saturdays = getProductsCheckedOnThisDay("Saturday", allRoutineItems);
  const sundays = getProductsCheckedOnThisDay("Sunday", allRoutineItems);

  return (
    <div className="WeeklyRoutine">
      <header>
        <div className="weekly-headline-wrapper">
          <h1 className="weekly-headline">My Week</h1>
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
