import "./Home.css";
import bottleOne from "../images/bottle-one.png";
import bottleTwo from "../images/bottle-two.png";

export default function Home() {
  return (
    <div className="home">
      <div className="headline-wrapper">
        <h1 className="headline">routinely</h1>
      </div>
      <div className="bottle-wrapper-one">
        <a href="/products" className="product-link">
          Check out all products
        </a>
        <img src={bottleOne} alt="bottle" className="bottle-one" />
      </div>
      <div className="bottle-wrapper-two">
        <a href="/weekly-routine" className="routine-link">
          View your weekly routine
        </a>
        <img src={bottleTwo} alt="bottle" className="bottle-two" />
      </div>
    </div>
  );
}
