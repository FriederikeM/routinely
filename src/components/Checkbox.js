import "./Checkbox.css";
import { FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";

export default function Checkbox({ name }) {
  const [daySelected, setDaySelected] = useState(false);

  function onAddDay() {
    setDaySelected(!daySelected);
  }

  return (
    <div className="Checkbox">
      <div className="weekday">
        <input
          type="checkbox"
          id={name}
          name={name}
          className="weekday-checkbox"
          onChange={onAddDay}
        />
        <label htmlFor={name} className="weekday-label">
          {name}
        </label>
      </div>

      {daySelected && (
        <div className="time-of-day">
          <span className="morning">
            <input
              type="checkbox"
              id="morning"
              name="morning"
              className="morning-checkbox"
            />
            <label htmlFor="morning" className="morning-label">
              <FiSun />
            </label>
          </span>
          <span className="evening">
            <input
              type="checkbox"
              id="evening"
              name="evening"
              className="evening-checkbox"
            />
            <label htmlFor="evening" className="evening-label">
              <FiMoon />
            </label>
          </span>
        </div>
      )}
    </div>
  );
}