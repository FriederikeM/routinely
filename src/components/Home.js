import "./Home.css";
import bottleOne from "../images/orange-bottle.svg";
import bottleTwo from "../images/purple-bottle.svg";
import { NavLink } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div className="Home">
      <header className="headline-wrapper">
        <h1 className="headline">routinely</h1>
      </header>
      <main className="home-main">
        <NavLink to="/products">
          <div className="bottle-wrapper-one">
            <p className="product-link">Check out all products</p>
            <img src={bottleOne} alt="bottle" className="bottle-one" />
          </div>
        </NavLink>
        <NavLink to="/weekly-routine">
          <div className="bottle-wrapper-two">
            <p className="routine-link">View your weekly routine</p>
            <img src={bottleTwo} alt="bottle" className="bottle-two" />
          </div>
        </NavLink>
      </main>
    </div>
  );
}
