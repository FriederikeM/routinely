import "./DailyRoutine.css";
import AddedProductCard from "./AddedProductCard.js";
import { FaArrowLeft } from "react-icons/fa";

export default function DailyRoutine() {
  return (
    <div className="DailyRoutine">
      <header className="daily-header">
        <h1 className="daily-headline">monday</h1>
        <button className="history-back">
          <FaArrowLeft />
        </button>
      </header>
      <main className="daily-main">
        <section className="morning-products-display">
          <h2 className="daytime-headline">morning</h2>
          <AddedProductCard />
          <AddedProductCard />
          <AddedProductCard />
          <AddedProductCard />
        </section>
        <section className="evening-products-display">
          <h2 className="daytime-headline">evening</h2>
          <AddedProductCard />
          <AddedProductCard />
          <AddedProductCard />
          <AddedProductCard />
        </section>
      </main>
    </div>
  );
}
