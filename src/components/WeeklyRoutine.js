import "./WeeklyRoutine.css";
import WeekDayCard from "./WeekDayCard";
import { NavLink } from "react-router-dom";

export default function WeeklyRoutine() {
  return (
    <div className="WeeklyRoutine">
      <header>
        <div className="headline-wrapper">
          <h1 className="headline">my week</h1>
        </div>
      </header>
      <main className="weekly-main">
        <WeekDayCard />
        <WeekDayCard />
        <WeekDayCard />
        <WeekDayCard />
        <WeekDayCard />
        <WeekDayCard />
        <WeekDayCard />
        <NavLink to="/products" className="add-button-weekly">
          +
        </NavLink>
      </main>
    </div>
  );
}
