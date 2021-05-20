import "./Checkbox.css";
import { FiMoon, FiSun } from "react-icons/fi";
import { getClassForWeekdayCheckboxAlignment } from "../../utility/getClassesForSizingAndPositioning";
import PropTypes from "prop-types";

Checkbox.propTypes = {
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  onDayClicked: PropTypes.func,
  onMorningClicked: PropTypes.func,
  onEveningClicked: PropTypes.func,
  morning: PropTypes.bool,
  evening: PropTypes.bool,
};

export default function Checkbox({
  name,
  isChecked,
  onDayClicked,
  onMorningClicked,
  onEveningClicked,
  morning,
  evening,
}) {
  const daySelected = isChecked;

  const classForCheckboxAlignment = getClassForWeekdayCheckboxAlignment(name);

  return (
    <div className={`Checkbox ${classForCheckboxAlignment}`}>
      <div className="weekday">
        <input
          onChange={() => onDayClicked(name)}
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
              onChange={() => onMorningClicked(name)}
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
              onChange={() => onEveningClicked(name)}
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
