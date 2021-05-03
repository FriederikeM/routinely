import "./DailyRoutine.css";
import AddedProductCard from "./AddedProductCard.js";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";

export default function DailyRoutine() {
  const { weekday } = useParams();
  const history = useHistory();

  return (
    <div className="DailyRoutine" key={weekday}>
      <header className="daily-header">
        <div className="daily-headline-wrapper">
          <h1 className="daily-headline">monday</h1>
        </div>
        <button className="history-back" onClick={() => history.goBack()}>
          <FaArrowLeft />
        </button>
      </header>
      <main className="daily-main">
        <section className="morning-products-display">
          <h2 className="daytime-headline">morning</h2>
          <article className="morning-products-list">
            <AddedProductCard />
            <AddedProductCard />
            <AddedProductCard />
            <AddedProductCard />
          </article>
        </section>
        <section className="evening-products-display">
          <h2 className="daytime-headline">evening</h2>
          <article className="evening-products-list">
            <AddedProductCard />
            <AddedProductCard />
            <AddedProductCard />
            <AddedProductCard />
          </article>
        </section>
      </main>
    </div>
  );
}
