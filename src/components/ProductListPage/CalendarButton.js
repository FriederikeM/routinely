import { ImCalendar } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "./CalendarButton.css";
import React from "react";

export default function CalendarButton() {
  return (
    <div className="CalendarButton">
      <NavLink to="/weekly-routine" className="weekly-routine-link">
        <ImCalendar className="calendar" />
      </NavLink>
    </div>
  );
}
