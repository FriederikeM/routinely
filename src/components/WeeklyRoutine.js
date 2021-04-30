import "./WeeklyRoutine.css";
import WeekDayCard from "./WeekDayCard";
import { NavLink } from "react-router-dom";
import { getDataFromLocalStorage } from "../utility/localStorage";
import { useEffect } from "react";

export default function WeeklyRoutine() {
  const ids = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
  ];

  useEffect(() => {
    ids.map((id) => {
      const productData = getDataFromLocalStorage(id);
      console.log(productData);
    });
  }, []);

  return (
    <div className="WeeklyRoutine">
      <header>
        <div className="headline-wrapper">
          <h1 className="headline">my week</h1>
        </div>
      </header>
      <main className="weekly-main">
        <WeekDayCard name="monday" />
        <WeekDayCard name="tuesday" />
        <WeekDayCard name="wednesday" />
        <WeekDayCard name="thursday" />
        <WeekDayCard name="friday" />
        <WeekDayCard name="saturday" />
        <WeekDayCard name="sunday" />
        <NavLink to="/products" className="add-button-weekly">
          +
        </NavLink>
      </main>
    </div>
  );
}
