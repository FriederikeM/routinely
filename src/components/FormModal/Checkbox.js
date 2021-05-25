import "./Checkbox.css";

import { getClassForWeekdayCheckboxAlignment } from "../../utility/getClassesForSizingAndPositioning";
import PropTypes from "prop-types";
import TimeOfDayCheckbox from "./TimeOfDayCheckbox";

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onDayClicked: PropTypes.func.isRequired,
  onMorningClicked: PropTypes.func.isRequired,
  onEveningClicked: PropTypes.func.isRequired,
  morning: PropTypes.bool.isRequired,
  evening: PropTypes.bool.isRequired,
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
          <TimeOfDayCheckbox
            onChange={onTimeOfDayClicked}
            weekdayName={name}
            timeOfDay="morning"
            checked={morning}
          />
          <TimeOfDayCheckbox
            onChange={onTimeOfDayClicked}
            weekdayName={name}
            timeOfDay="evening"
            checked={evening}
          />
        </div>
      )}
    </div>
  );
}
