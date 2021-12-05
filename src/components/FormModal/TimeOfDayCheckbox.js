import { FiMoon, FiSun } from "react-icons/fi";

export default function TimeOfDayCheckbox({
  onChange,
  weekdayName,
  timeOfDay,
  checked,
}) {
  return (
    <span
      onClick={() => onChange(weekdayName, timeOfDay)}
      className={`${timeOfDay}`}
    >
      <input
        type="checkbox"
        name={timeOfDay}
        className={`${timeOfDay}-checkbox`}
        checked={checked}
      />
      <label htmlFor={timeOfDay} className={`${timeOfDay}-label`}>
        {timeOfDay === "morning" ? <FiSun /> : <FiMoon />}
      </label>
    </span>
  );
}
