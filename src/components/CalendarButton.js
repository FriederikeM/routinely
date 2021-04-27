import { ImCalendar } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./CalendarButton.css";

export default function CalendarButton() {
  return (
    <div className="IconButton">
      <NavLink to="/weekly-routine" className="weekly-routine-link">
        <ImCalendar className="calendar" />
      </NavLink>
    </div>
  );
}
