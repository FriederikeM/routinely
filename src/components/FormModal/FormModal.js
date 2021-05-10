import "./FormModal.css";
import Checkbox from "./Checkbox.js";
import { useEffect, useState } from "react";
import {
  getDataFromLocalStorage,
  sendDataToLocalStorage,
} from "../../utility/localStorage";
import getIndexForWeekday from "../../utility/getIndexForWeekday";
import getProductById from "../../utility/getProductById";

export default function FormModal({
  onCancelAdding,
  id,
  name,
  conflicts,
  products,
}) {
  const [openingDate, setOpeningDate] = useState("");
  const [routineData, setRoutineData] = useState([]);
  const [buttonName, setButtonName] = useState("add");
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

  useEffect(() => {
    const routineData = getDataFromLocalStorage();
    const sameProduct = routineData.find((product) => {
      return product.id === id;
    });
    sameProduct && setWeekRoutine(sameProduct);
    sameProduct && setButtonName("edit");
    setRoutineData(routineData);
  }, [id]);

  function handleChangeDate(event) {
    const date = event.target.value;
    const newWeekRoutine = weekRoutine;
    newWeekRoutine.date = date;
    setWeekRoutine(newWeekRoutine);
    setOpeningDate(date);
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
    setWeekRoutine({ id: id, days: newCheckedDays, date: weekRoutine.date });
  }

  function handleMorningClicked(name) {
    const i = getIndexForWeekday(name);
    const checkedMornings = routineData.filter(
      (product) =>
        product.days[i].name === name && product.days[i].morning === true
    );

    const routineIDs = checkedMornings.map((product) => product.id);
    const intersection = routineIDs.filter((id) => conflicts.includes(id));

    const conflictName = intersection.map((id) => {
      const conflictProduct = getProductById(id, products);
      return conflictProduct.name;
    });

    if (intersection.length > 0) {
      alert(
        `You are already using ${conflictName} on ${name} morning. These two products have conflicting ingredients`
      );
    } else {
      const newMorningChecked = weekRoutine.days.map((day) => {
        if (day.name === name) {
          day.morning = !day.morning;
          return day;
        } else {
          return day;
        }
      });
      setWeekRoutine({
        id: id,
        days: newMorningChecked,
        date: weekRoutine.date,
      });
    }
  }

  function handleEveningClicked(name) {
    const i = getIndexForWeekday(name);
    const checkedEvenings = routineData.filter(
      (product) =>
        product.days[i].name === name && product.days[i].evening === true
    );

    const routineIDs = checkedEvenings.map((product) => product.id);
    const intersection = routineIDs.filter((id) => conflicts.includes(id));

    const conflictName = intersection.map((id) => {
      const conflictProduct = getProductById(id, products);
      return conflictProduct.name;
    });

    if (intersection.length > 0) {
      alert(
        `You are already using ${conflictName} on ${name} evening. These two products have conflicting ingredients`
      );
    } else {
      const newEveningChecked = weekRoutine.days.map((day) => {
        if (day.name === name) {
          day.evening = !day.evening;
          return day;
        } else {
          return day;
        }
      });
      setWeekRoutine({
        id: id,
        days: newEveningChecked,
        date: weekRoutine.date,
      });
    }
  }

  function handleModalFormSubmit(event) {
    event.preventDefault();

    const noDaysChecked = weekRoutine.days.map((day) => {
      return day.isChecked === false;
    });
    const nothingSelected = noDaysChecked.every((day) => day === true);

    const checkNotSpecified = weekRoutine.days.map((day) => {
      return (
        day.isChecked === true && day.morning === false && day.evening === false
      );
    });
    const noUnspecifiedChecks = checkNotSpecified.every(
      (check) => check === false
    );

    if (noUnspecifiedChecks === false || nothingSelected === true) {
      onCancelAdding();
    } else {
      sendDataToLocalStorage(weekRoutine);
      onCancelAdding();
    }
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
              value={weekRoutine.date}
            ></input>
          </div>
          <div className="finish-buttons">
            <button className="quit-modal" onClick={onCancelAdding}>
              cancel
            </button>
            <button type="submit" className="add-product">
              {buttonName}
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}
