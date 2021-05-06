import "./DailyRoutine.css";
import AddedProductCard from "./AddedProductCard.js";
import { FaArrowLeft } from "react-icons/fa";
import { useParams, useHistory } from "react-router-dom";
import { getDataFromLocalStorage } from "../../utility/localStorage.js";
import { useEffect, useState } from "react";
import getIndexForWeekday from "../../utility/getIndexForWeekday";
import EditingFormModal from "../EditingFormModal/EditingFormModal";
import getProductById from "../../utility/getProductById";

export default function DailyRoutine() {
  const { weekday } = useParams();
  const history = useHistory();
  const [allRoutineItems, setAllRoutineItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState();

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

  const productsMorning = weekdayArray.filter((product) => {
    return product.days[i].morning;
  });
  const productsEvening = weekdayArray.filter((product) => {
    return product.days[i].evening;
  });

  function handleEditRoutine(id) {
    console.log("hello");
    setId(id);
    setShowModal(true);
  }

  function renderMorningAddedProductCard() {
    return productsMorning.map((product) => {
      const productData = getProductById(product.id, products);
      return (
        <AddedProductCard
          products={products}
          timeOfTheDay="morning"
          name={productData.name}
          date={product.date}
          expirationPeriod={productData.expirationPeriod}
          packaging={productData.packging}
          nameOfTheWeekday={weekday}
          imgSource={productData.image}
          url={productData.url}
          onEditRoutine={() => handleEditRoutine(product.id)}
        />
      );
    });
  }

  function renderEveningAddedProductCard() {
    return productsEvening.map((product) => {
      const productData = getProductById(product.id, products);
      return (
        <AddedProductCard
          products={products}
          timeOfTheDay="evening"
          name={productData.name}
          date={product.date}
          expirationPeriod={productData.expirationPeriod}
          packaging={productData.packging}
          nameOfTheWeekday={weekday}
          imgSource={productData.image}
          url={productData.url}
          onEditRoutine={() => handleEditRoutine(product.id)}
        />
      );
    });
  }

  return (
    <div className="DailyRoutine">
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
            {products.length > 0 && renderMorningAddedProductCard()}
          </article>
        </section>
        <section className="evening-products-display">
          <h2 className="daytime-headline">evening</h2>
          <article className="evening-products-list">
            {products.length > 0 && renderEveningAddedProductCard()}
          </article>
        </section>
        {showModal && <EditingFormModal id={id} />}
      </main>
    </div>
  );
}
