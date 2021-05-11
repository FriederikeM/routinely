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
    const indexOfWeekday = getIndexForWeekday(name);

    const intersection = routineData
      .filter(
        (product) =>
          product.days[indexOfWeekday].name === name &&
          product.days[indexOfWeekday].morning === true
      )
      .map((product) => product.id)
      .filter((id) => conflicts.includes(id));

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
    const indexOfWeekday = getIndexForWeekday(name);

    const intersection = routineData
      .filter(
        (product) =>
          product.days[indexOfWeekday].name === name &&
          product.days[indexOfWeekday].evening === true
      )
      .map((product) => product.id)
      .filter((id) => conflicts.includes(id));

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

    const isNothingSelected = weekRoutine.days
      .map((day) => {
        return day.isChecked === false;
      })
      .every((day) => day === true);

    const isNoUnspecifiedChecks = weekRoutine.days
      .map((day) => {
        return (
          day.isChecked === true &&
          day.morning === false &&
          day.evening === false
        );
      })
      .every((check) => check === false);

    if (isNoUnspecifiedChecks === false) {
      alert(
        "Please specify during which time of the day you want to use the product on the checked days"
      );
    } else if (isNothingSelected === true) {
      onCancelAdding();
    } else {
      sendDataToLocalStorage(weekRoutine, buttonName !== "edit");
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
