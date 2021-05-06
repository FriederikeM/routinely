import "./EditingFormModal.css";
import EditingCheckbox from "./EditingCheckbox.js";
import { useState } from "react";
import { sendDataToLocalStorage } from "../../utility/localStorage";

export default function EditingFormModal({ onCancelAdding, id, name }) {
  const [openingDate, setOpeningDate] = useState("");
  const [weekRoutine, setWeekRoutine] = useState({
    id: id,
    days: [
      {
        name: "Monday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        name: "Tuesday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        name: "Wednesday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        name: "Thursday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        name: "Friday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        name: "Saturday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        name: "Sunday",
        isChecked: false,
        morning: false,
        evening: false,
      },
    ],
    date: openingDate,
  });

  function handleChangeDate(event) {
    const date = event.target.value;
    const newWeekRoutine = weekRoutine;
    newWeekRoutine.date = date;
    setWeekRoutine(newWeekRoutine);
    setOpeningDate(date);
  }

  function handleModalFormSubmit(event) {
    event.preventDefault();
    sendDataToLocalStorage(weekRoutine);
    onCancelAdding();
  }

  function handleDayClicked(name) {
    const newCheckedDays = weekRoutine.days.map((day) => {
      if (day.name === name) {
        day.isChecked = !day.isChecked;
        return day;
      } else {
        return day;
      }
    });
    setWeekRoutine({ id: id, days: newCheckedDays, date: openingDate });
  }

  function handleMorningClicked(name) {
    const newMorningChecked = weekRoutine.days.map((day) => {
      if (day.name === name) {
        day.morning = !day.morning;
        return day;
      } else {
        return day;
      }
    });
    setWeekRoutine({ id: id, days: newMorningChecked, date: openingDate });
  }

  function handleEveningClicked(name) {
    const newEveningChecked = weekRoutine.days.map((day) => {
      if (day.name === name) {
        day.evening = !day.evening;
        return day;
      } else {
        return day;
      }
    });
    setWeekRoutine({ id: id, days: newEveningChecked, date: openingDate });
  }

  return (
    <div className="EditingFormModal">
      <article className="editing-modal">
        <form
          className="editing-routine-info-form"
          onSubmit={handleModalFormSubmit}
        >
          <p className="editing-day-question">
            Which days would you like to add {name} to?
          </p>
          <div className="editing-weekday-checkboxes">
            {" "}
            {weekRoutine.days.map((day, index) => {
              return (
                <EditingCheckbox
                  key={index + day.name}
                  name={day.name}
                  handleDayClicked={handleDayClicked}
                  isChecked={day.isChecked}
                  morning={day.morning}
                  evening={day.evening}
                  handleMorningClicked={handleMorningClicked}
                  handleEveningClicked={handleEveningClicked}
                />
              );
            })}
          </div>
          <div className="editing-date-choice">
            <label htmlFor="date">
              When did you open this product?{" "}
              <span className="editing-optional">(optional)</span>
            </label>
            <br />
            <input
              type="date"
              id="date"
              name="date"
              className="editing-date-input"
              onChange={handleChangeDate}
            ></input>
          </div>
          <div className="editing-finish-buttons">
            <button className="editing-quit-modal" onClick={onCancelAdding}>
              cancel
            </button>
            <button type="submit" className="editing-add-product">
              add
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}
