import { FiMoon, FiSun } from "react-icons/fi";

export default function TimeOfDayCheckbox({
  onChange,
  weekdayName,
  timeOfDay,
  checked,
}) {
  return (
    <span className="morning">
      <input
        onChange={() => onChange(weekdayName, timeOfDay)}
        type="checkbox"
        name={timeOfDay}
        className={
          timeOfDay === "morning" ? "morning-checkbox" : "evening-checkbox"
        }
        checked={checked}
      />
      <label
        htmlFor={timeOfDay}
        className={timeOfDay === "morning" ? "morning-label" : "evening-label"}
      >
        {timeOfDay === "morning" ? <FiSun /> : <FiMoon />}
      </label>
    </span>
  );
}
