import "./Home.css";
import bottleOne from "../images/orange-bottle.svg";
import bottleTwo from "../images/purple-bottle.svg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="headline-wrapper">
        <h1 className="headline">routinely</h1>
      </div>
      <div className="bottle-wrapper-one">
        <NavLink to="/products" className="product-link">
          Check out all products
        </NavLink>
        <img src={bottleOne} alt="bottle" className="bottle-one" />
      </div>
      <div className="bottle-wrapper-two">
        <NavLink to="/weekly-routine" className="routine-link">
          View your weekly routine
        </NavLink>
        <img src={bottleTwo} alt="bottle" className="bottle-two" />
      </div>
    </div>
  );
}
