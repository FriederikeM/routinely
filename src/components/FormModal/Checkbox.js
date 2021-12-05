import "./Checkbox.css";

import { getClassForWeekdayCheckboxAlignment } from "../../utility/getClassesForSizingAndPositioning";
import PropTypes from "prop-types";
import TimeOfDayCheckbox from "./TimeOfDayCheckbox";

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onDayClicked: PropTypes.func.isRequired,
  onTimeOfDayClicked: PropTypes.func.isRequired,
  morning: PropTypes.bool.isRequired,
  evening: PropTypes.bool.isRequired,
};

export default function Checkbox({
  name,
  isChecked,
  onDayClicked,
  onTimeOfDayClicked,
  morning,
  evening,
}) {
  const daySelected = isChecked;

  const classForCheckboxAlignment = getClassForWeekdayCheckboxAlignment(name);

  return (
    <div className={`Checkbox ${classForCheckboxAlignment}`}>
      <div onClick={() => onDayClicked(name)} className="weekday">
        <input
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
