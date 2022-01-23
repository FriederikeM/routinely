import { NavLink } from "react-router-dom";
import "./WrongUrl.css";
import React from "react";

export default function WrongUrl() {
  return (
    <div className="WrongUrl">
      <article className="wrong-url-message">
        <div className="wrong-url-text">
          <h3>
            Ooops, nothing to see here!{" "}
            <span role="img" aria-label="eyes">
              {" "}
              👀{" "}
            </span>
          </h3>
        </div>
        <div className="redirect">
          <h3>Did you want to...</h3>
          <NavLink to="/products">check out all the products</NavLink>
          <h4>Or maybe...</h4>
          <NavLink to="/weekly-routine">take a look at your routine</NavLink>
        </div>
      </article>
    </div>
  );
}
