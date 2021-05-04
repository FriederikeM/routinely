import "./DailyRoutine.css";
import AddedProductCard from "./AddedProductCard.js";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import { getDataFromLocalStorage } from "../../utility/localStorage.js";
import { useEffect, useState } from "react";
import getIndexForWeekday from "../../utility/getIndexForWeekday";

export default function DailyRoutine() {
  const { weekday } = useParams();
  const history = useHistory();
  const [allRoutineItems, setAllRoutineItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      return fetch("/products.json")
        .then((response) => response.json())
        .then((productData) => {
          setProducts(productData);
        });
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const routine = getDataFromLocalStorage();
    setAllRoutineItems(routine);
  }, [weekday]);

  const i = getIndexForWeekday(weekday);

  const weekdayArray = allRoutineItems.filter((item) => {
    return item.days[i].isChecked;
  });

  return (
    <div className="DailyRoutine" key={weekday}>
      <header className="daily-header">
        <div className="daily-headline-wrapper">
          <h1 className="daily-headline">{weekday}</h1>
        </div>
        <button className="history-back" onClick={() => history.goBack()}>
          <FaArrowLeft />
        </button>
      </header>
      <main className="daily-main">
        <section className="morning-products-display">
          <h2 className="daytime-headline">morning</h2>
          <article className="morning-products-list">
            <AddedProductCard
              products={products}
              timeOfTheDay="morning"
              productsOfTheDay={weekdayArray}
              nameOfTheWeekday={weekday}
            />
          </article>
        </section>
        <section className="evening-products-display">
          <h2 className="daytime-headline">evening</h2>
          <article className="evening-products-list">
            <AddedProductCard
              products={products}
              timeOfTheDay="evening"
              productsOfTheDay={weekdayArray}
              nameOfTheWeekday={weekday}
            />
          </article>
        </section>
      </main>
    </div>
  );
}
