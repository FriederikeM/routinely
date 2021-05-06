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
  const [tickedTwice, setTickedTwice] = useState(false);
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
    return productObject.days[indexWeekday].morning === true;
  });

  const sameProductEvening = sameProduct.filter((productObject) => {
    return productObject.days[indexWeekday].evening === true;
  });

  function handleModalFormSubmit(event) {
    event.preventDefault();
    if (tickedTwice === false) {
      sendDataToLocalStorage(weekRoutine);
      onCancelAdding();
    } else {
      alert(
        "Oops, you are trying to add the product to a time when you are already using it, please untick before adding"
      );
    }
  }

  function checkMorningAddedProducts(name, morningClicked) {
    if (
      sameProductMorning.length !== 0 &&
      morningClicked === true &&
      name === sameProductMorning[0].days[indexWeekday].name
    ) {
      setTickedTwice(true);
      alert(
        `you are already using this product on ${name} morning, please untick`
      );
    } else if (
      sameProductMorning.length !== 0 &&
      morningClicked === false &&
      name === sameProductMorning[0].days[indexWeekday].name
    ) {
      setTickedTwice(false);
    }
  }

  function checkEveningAddedProducts(name, eveningClicked) {
    if (
      sameProductEvening.length !== 0 &&
      eveningClicked &&
      name === sameProductEvening[0].days[indexWeekday].name
    ) {
      setTickedTwice(true);
      alert(
        `you are already using this product on ${name} evening, please untick`
      );
    } else if (
      sameProductMorning.length !== 0 &&
      !eveningClicked &&
      name === sameProductMorning[0].days[indexWeekday].name
    ) {
      setTickedTwice(false);
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

  function handleMorningClicked(name) {
    const newMorningChecked = weekRoutine.days.map((day) => {
      if (day.name === name) {
        day.morning = !day.morning;
        checkMorningAddedProducts(name, day.morning);
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
        checkEveningAddedProducts(name, day.evening);
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
