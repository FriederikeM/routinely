import "./DailyRoutine.css";
import AddedProductCard from "./AddedProductCard.js";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import { getDataFromLocalStorage } from "../../utility/localStorage.js";
import { useEffect, useState } from "react";

export default function DailyRoutine() {
  const { weekday } = useParams();
  const history = useHistory();
  const [allItems, setAllItems] = useState([]);
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
    setAllItems(routine);
  }, [weekday]);

  let i;
  if (weekday === "Monday") {
    i = 0;
  } else if (weekday === "Tuesday") {
    i = 1;
  } else if (weekday === "Wednesday") {
    i = 2;
  } else if (weekday === "Thursday") {
    i = 3;
  } else if (weekday === "Friday") {
    i = 4;
  } else if (weekday === "Saturday") {
    i = 5;
  } else if (weekday === "Sunday") {
    i = 6;
  }

  const weekdayArray = allItems.filter((item) => {
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
              time="morning"
              info={weekdayArray}
              name={weekday}
            />
          </article>
        </section>
        <section className="evening-products-display">
          <h2 className="daytime-headline">evening</h2>
          <article className="evening-products-list">
            <AddedProductCard
              products={products}
              time="evening"
              info={weekdayArray}
              name={weekday}
            />
          </article>
        </section>
      </main>
    </div>
  );
}
