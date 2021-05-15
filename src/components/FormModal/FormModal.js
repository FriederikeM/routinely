import "./FormModal.css";
import Checkbox from "./Checkbox.js";
import { useEffect, useState } from "react";
import {
  editDataInLocalStorage,
  getDataFromLocalStorage,
  sendDataToLocalStorage,
} from "../../utility/localStorage";
import {
  findConflictingProductIds,
  findConflictProductName,
} from "../../utility/findConflictingProducts";
import {
  isNothingSelected,
  isNoUnspecifiedSelected,
} from "../../utility/isNotSelected";
import getNewChecks from "../../utility/getNewChecks";
import isThisTimeChecked from "../../utility/isThisTimeChecked";

export default function FormModal({
  onCancelAdding,
  id,
  name,
  conflicts,
  products,
}) {
  const [openingDate, setOpeningDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [conflictName, setConflictName] = useState("");
  const [clickedWeekdayName, setClickedWeekdayName] = useState("");
  const [clickedtimeOfTheDay, setClickedTimeOfTheDay] = useState("");
  const [routineData, setRoutineData] = useState([]);
  const [editMode, setEditMode] = useState(false);
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
    sameProduct && setEditMode(true);
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
    const newCheckedDays = getNewChecks(weekRoutine, name, "isChecked");
    setWeekRoutine({ id: id, days: newCheckedDays, date: weekRoutine.date });
  }

  function handleMorningClicked(name) {
    const intersection = findConflictingProductIds(
      name,
      routineData,
      "morning",
      conflicts
    );
    const conflictName = findConflictProductName(intersection, products);
    setConflictName(conflictName);
    setClickedWeekdayName(name);
    setClickedTimeOfTheDay("morning");

    const alreadyChecked = isThisTimeChecked(routineData, name, "morning", id);

    if (intersection.length > 0 && alreadyChecked === false) {
      setShowModal(true);
    } else {
      const newMorningChecked = getNewChecks(weekRoutine, name, "morning");
      setWeekRoutine({
        id: id,
        days: newMorningChecked,
        date: weekRoutine.date,
      });
    }
  }

  function handleEveningClicked(name) {
    const intersection = findConflictingProductIds(
      name,
      routineData,
      "evening",
      conflicts
    );
    const conflictName = findConflictProductName(intersection, products);
    setConflictName(conflictName);
    setClickedWeekdayName(name);
    setClickedTimeOfTheDay("evening");

    const alreadyChecked = isThisTimeChecked(routineData, name, "evening", id);

    if (intersection.length > 0 && alreadyChecked === false) {
      setShowModal(true);
    } else {
      const newEveningChecked = getNewChecks(weekRoutine, name, "evening");
      setWeekRoutine({
        id: id,
        days: newEveningChecked,
        date: weekRoutine.date,
      });
    }
  }

  function handleModalFormSubmit(event) {
    event.preventDefault();

    const isNothingChecked = isNothingSelected(weekRoutine);
    const isNoUnspecifiedChecks = isNoUnspecifiedSelected(weekRoutine);

    if (isNoUnspecifiedChecks === false) {
      alert(
        "Please specify during which time of the day you want to use the product on the checked days"
      );
    } else if (isNothingChecked === true) {
      onCancelAdding();
    } else {
      if (editMode === false) {
        sendDataToLocalStorage(weekRoutine);
        onCancelAdding();
      } else {
        editDataInLocalStorage(weekRoutine);
        onCancelAdding();
      }
    }
  }

  function handleAddAnywayClicked() {
    const newEveningChecked = getNewChecks(
      weekRoutine,
      clickedWeekdayName,
      clickedtimeOfTheDay
    );
    setWeekRoutine({
      id: id,
      days: newEveningChecked,
      date: weekRoutine.date,
    });
    setShowModal(false);
  }

  const classForAlertShown = showModal ? "background-blur" : "";

  return (
    <div className="FormModal">
      <article className={`modal `}>
        <form
          className={`routine-info-form ${classForAlertShown}`}
          onSubmit={handleModalFormSubmit}
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
              {editMode ? "edit" : "add"}
            </button>
          </div>
        </form>
        {showModal && (
          <div className="alert-modal">
            <p className="alert-message">
              You are already using{" "}
              <em>
                {[
                  conflictName.slice(0, -1).join(", "),
                  conflictName.slice(-1)[0],
                ].join(conflictName.length < 2 ? "" : " and ")}
              </em>{" "}
              on {clickedWeekdayName} {clickedtimeOfTheDay}. These products have
              conflicting ingredients
            </p>
            <div className="alert-modal-finishing-button-wrapper">
              <button className="add-anyway" onClick={handleAddAnywayClicked}>
                add anyway
              </button>
              <button
                className="cancel-alert"
                onClick={() => setShowModal(false)}
              >
                cancel
              </button>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
