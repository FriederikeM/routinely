import "./Checkbox.css";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Checkbox({
  name,
  isChecked,
  handleDayClicked,
  handleMorningClicked,
  handleEveningClicked,
  morning,
  evening,
}) {
  const daySelected = isChecked;

  return (
    <div className="Checkbox">
      <div className="weekday">
        <input
          onChange={() => handleDayClicked(name)}
          type="checkbox"
          name={name}
          className="weekday-checkbox"
          value={name}
          checked={isChecked}
        />
        <label htmlFor={name} className="weekday-label">
          {name}
        </label>
      </div>

      {daySelected && (
        <div className="time-of-day">
          <span className="morning">
            <input
              onChange={() => handleMorningClicked(name)}
              type="checkbox"
              name="morning"
              className="morning-checkbox"
              checked={morning}
            />
            <label htmlFor="morning" className="morning-label">
              <FiSun />
            </label>
          </span>
          <span className="evening">
            <input
              onChange={() => handleEveningClicked(name)}
              type="checkbox"
              name="evening"
              className="evening-checkbox"
              checked={evening}
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
