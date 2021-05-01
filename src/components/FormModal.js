import "./FormModal.css";
import Checkbox from "./Checkbox.js";
import { useState } from "react";
import { sendDataToLocalStorage } from "../utility/localStorage";

export default function FormModal({ onCancelAdding, id }) {
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
    <div className="FormModal">
      <article className="modal">
        <form className="routine-info-form" onSubmit={handleModalFormSubmit}>
          <p className="day-question">
            Which days would you like to add this product to?
          </p>
          <div className="weekday-checkboxes">
            {" "}
            {weekRoutine.days.map((day, index) => {
              return (
                <Checkbox
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
          <div className="date-choice">
            <label htmlFor="date">When did you open this product?</label>
            <input
              type="date"
              id="date"
              name="date"
              className="date-input"
              onChange={handleChangeDate}
            ></input>
          </div>
          <div className="finish-buttons">
            <button className="quit-modal" onClick={onCancelAdding}>
              cancel
            </button>
            <button type="submit" className="add-product">
              add
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}
