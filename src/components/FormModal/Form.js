import "./Form.css";
import Checkbox from "./Checkbox";
import PropTypes from "prop-types";

Form.propTypes = {
  classForAlertShown: PropTypes.string.isRequired,
  onModalFormSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  weekRoutine: PropTypes.object.isRequired,
  onDayClicked: PropTypes.func.isRequired,
  onMorningClicked: PropTypes.func.isRequired,
  onEveningClicked: PropTypes.func.isRequired,
  onChangeDate: PropTypes.func.isRequired,
  onCancelAdding: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default function Form({
  classForAlertShown,
  onModalFormSubmit,
  name,
  weekRoutine,
  onDayClicked,
  onMorningClicked,
  onEveningClicked,
  onChangeDate,
  onCancelAdding,
  editMode,
}) {
  return (
    <form
      className={`routine-info-form ${classForAlertShown}`}
      onSubmit={onModalFormSubmit}
    >
      <p className="day-question">
        Which days would you like to add {name} to?
      </p>
      <div className="weekday-checkboxes">
        {" "}
        {weekRoutine.days.map((day, index) => {
          return (
            <Checkbox
              key={index + day.name}
              name={day.name}
              onDayClicked={onDayClicked}
              isChecked={day.isChecked}
              morning={day.morning}
              evening={day.evening}
              onMorningClicked={onMorningClicked}
              onEveningClicked={onEveningClicked}
            />
          );
        })}
      </div>
      <div className="date-choice">
        <label htmlFor="date">
          When did you open this product?{" "}
          <span className="optional">(optional)</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="date-input"
          onChange={onChangeDate}
          value={weekRoutine.date}
        ></input>
      </div>
      <div className="finish-buttons">
        <button className="quit-modal" onClick={onCancelAdding}>
          cancel
        </button>
        <button type="submit" className="add-product">
          {editMode ? "edit" : "add"}
        </button>
      </div>
    </form>
  );
}
