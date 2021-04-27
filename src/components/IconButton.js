import "./IconButton.css";
import { ImCalendar } from "react-icons/im";
import { NavLink } from "react-router-dom";

export default function IconButton() {
  return (
    <div className="IconButton">
      <NavLink to="/weekly-routine" className="weekly-routine-link">
        <ImCalendar className="calendar" />
      </NavLink>
    </div>
  );
}
