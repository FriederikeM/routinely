import "./FormModal.css";
import Checkbox from "./Checkbox.js";
import { useState } from "react";
import {
  getDataFromLocalStorage,
  sendDataToLocalStorage,
} from "../../utility/localStorage";
import getIndexForWeekday from "../../utility/getIndexForWeekday";

export default function FormModal({ onCancelAdding, id, name }) {
  const [openingDate, setOpeningDate] = useState("");
  const [indexWeekday, setIndexWeekday] = useState(0);
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

  const routineData = getDataFromLocalStorage();

  const sameProduct = routineData.filter((sameProduct) => {
    return sameProduct.id === id;
  });

  function sendNameToIndex(name) {
    const i = getIndexForWeekday(name);
    setIndexWeekday(i);
  }

  const sameProductMorning = sameProduct.filter((productObject) => {
    const morning = productObject.days[indexWeekday].morning === true;
    return morning;
  });

  const sameProductEvening = sameProduct.filter((productObject) => {
    const evening = productObject.days[indexWeekday].evening === true;
    return evening;
  });

  function handleModalFormSubmit(event) {
    event.preventDefault();
    sendDataToLocalStorage(weekRoutine);
    onCancelAdding();
  }

  function checkMorningAddedProducts(name, morningClicked) {
    if (sameProductMorning.length !== 0 && !morningClicked) {
      if (name === sameProductMorning[0].days[indexWeekday].name) {
        alert(
          `you are already using this product on ${name} morning, please untick`
        );
      }
    }
  }

  function checkEveningAddedProducts(name, eveningClicked) {
    if (sameProductEvening.length !== 0 && !eveningClicked) {
      if (name === sameProductEvening[0].days[indexWeekday].name) {
        alert(
          `you are already using this product on ${name} evening, please untick`
        );
      }
    }
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

  function handleMorningClicked(name, morningClicked) {
    const newMorningChecked = weekRoutine.days.map((day) => {
      if (day.name === name) {
        day.morning = !day.morning;
        return day;
      } else {
        return day;
      }
    });
    checkMorningAddedProducts(name, morningClicked);
    setWeekRoutine({ id: id, days: newMorningChecked, date: openingDate });
  }

  function handleEveningClicked(name, eveningClicked) {
    const newEveningChecked = weekRoutine.days.map((day) => {
      if (day.name === name) {
        day.evening = !day.evening;
        return day;
      } else {
        return day;
      }
    });
    checkEveningAddedProducts(name, eveningClicked);
    setWeekRoutine({ id: id, days: newEveningChecked, date: openingDate });
  }

  return (
    <div className="FormModal">
      <article className="modal">
        <form className="routine-info-form" onSubmit={handleModalFormSubmit}>
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
                  handleDayClicked={handleDayClicked}
                  isChecked={day.isChecked}
                  morning={day.morning}
                  evening={day.evening}
                  handleMorningClicked={handleMorningClicked}
                  handleEveningClicked={handleEveningClicked}
                  sendNameToIndex={sendNameToIndex}
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
