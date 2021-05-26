import "./FormModal.css";
import { useEffect, useState } from "react";
import removeProductFromLocalStorage, {
  editDataInLocalStorage,
  getDataFromLocalStorage,
  sendDataToLocalStorage,
} from "../../utility/localStorage";
import {
  findConflictingProductId,
  findConflictProductName,
} from "../../utility/findConflictingProduct";
import {
  isNothingSelected,
  isNoUnspecifiedSelected,
} from "../../utility/isNotSelected";
import getNewChecks from "../../utility/getNewChecks";
import isThisTimeChecked, {
  removeCheckedTimeOfDay,
  isDayUncheckedButTimeOfDayChecked,
} from "../../utility/isThisTimeChecked";
import Form from "./Form";
import AlertModal from "./AlertModal";
import PropTypes from "prop-types";
import WarnModal from "./WarnModal";

FormModal.propTypes = {
  onCancelAdding: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  conflicts: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

export default function FormModal({
  onCancelAdding,
  id,
  name,
  conflicts,
  products,
}) {
  const [openingDate, setOpeningDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [conflictId, setConflictId] = useState();
  const [conflictName, setConflictName] = useState("");
  const [clickedWeekdayName, setClickedWeekdayName] = useState("");
  const [clickedTimeOfTheDay, setClickedTimeOfTheDay] = useState("");
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

  /**
   * function that updates the weekRoutine state when a user checks the day that
   * is indicated as a parameter and toggles the checkbox being checked or not
   * it also removes the morning and evening checks, when user unchecks the day
   * @type {function}
   * @param {string} name
   */

  function handleDayClicked(name) {
    const newCheckedDays = getNewChecks(weekRoutine, name, "isChecked");
    setWeekRoutine({ id: id, days: newCheckedDays, date: weekRoutine.date });

    const dayNotCheckedButMorningChecked = isDayUncheckedButTimeOfDayChecked(
      weekRoutine,
      "morning"
    );

    if (dayNotCheckedButMorningChecked === true) {
      removeCheckedTimeOfDay(weekRoutine, "morning");
    }

    const dayNotCheckedButEveningChecked = isDayUncheckedButTimeOfDayChecked(
      weekRoutine,
      "evening"
    );

    if (dayNotCheckedButEveningChecked === true) {
      removeCheckedTimeOfDay(weekRoutine, "evening");
    }
  }

  /**
   * function that handles when the morning of the day (indicated by name) is clicked
   * it finds out if a conflicting product has already been checked on that day in the
   * morning and then updates the conflictId and conflictName state accordingly
   * as well as the state of the day and timeOfDay to when the product was clicked (e.g. monday morning)
   * @type {function}
   * @param {string} name
   * @param {string} timeOfDay
   */

  function handleTimeOfDayClicked(name, timeOfDay) {
    const conflictingId = findConflictingProductId(
      name,
      routineData,
      timeOfDay,
      conflicts
    );
    setConflictId(conflictingId);

    const conflictName = findConflictProductName(conflictingId, products);
    setConflictName(conflictName);

    setClickedWeekdayName(name);
    setClickedTimeOfTheDay(timeOfDay);

    const alreadyChecked = isThisTimeChecked(routineData, name, timeOfDay, id);

    /**
     * if there is a conflicting product (represented by conflictingId)
     * AND if the checkbox I am clicking was previously unchecked (alreadyChecked is false)
     * the alert modal will pop up
     * if there is no conflicting product OR if there is one but I am
     * unchecking the checkbox (alreadyChecked is true) the modal will not show up
     * instead the changes will be stored in the weekRoutine useState
     */

    if (conflictingId && alreadyChecked === false) {
      setShowModal(true);
    } else {
      const newTimeOfDayChecked = getNewChecks(weekRoutine, name, timeOfDay);
      setWeekRoutine({
        id: id,
        days: newTimeOfDayChecked,
        date: weekRoutine.date,
      });
    }
  }

  /**
   * function sends weekRoutine to Local Storage
   * IF days have been checked AND time of the day hase been checked
   * if nothing has been checked, the modal just closes when the user submits
   * if only the day is checked and not the time of day, the user gets alerted
   * @type {function}
   * @param {submit} event
   */

  function handleModalFormSubmit(event) {
    event.preventDefault();

    const isNothingChecked = isNothingSelected(weekRoutine);

    const isNoUnspecifiedChecks = isNoUnspecifiedSelected(weekRoutine);

    /**
     * if the user checks a day, but not the time of day, they get alerted
     * if all days are unchecked and the user hasn't already added this product to their routine (editMode is false)
     * submitting will only make the modal disappear and nothing gets sent to Local Storage
     * if the user has already added this product to their routine before (editMode is true)
     * and now unchecks everything (isNothingChecked is true) the product gets removed from localStorage
     * if the user checks boxes for a new product and submits, it gets sent to LocalStorage
     * if the user checks boxes for a previously added product, the object in LocalStorage gets updated
     */

    if (isNoUnspecifiedChecks === false) {
      setShowWarning(true);
    } else if (isNothingChecked === true && editMode === false) {
      onCancelAdding();
    } else if (isNothingChecked === true && editMode === true) {
      removeProductFromLocalStorage(weekRoutine);
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

  /**
   * function removes (previously added) conflicting product from
   * the day and time of day and adds the current product instead
   * the modal then disappears
   * @type {function}
   */

  function handleProductSwap() {
    /**
     * Conflicting product
     */
    let conflictingProduct = routineData.find(
      (product) => product.id === conflictId
    );

    const newConflictingTimeOfDayChecked = getNewChecks(
      conflictingProduct,
      clickedWeekdayName,
      clickedTimeOfTheDay
    );

    /**
     * Updated variable with clicked day and time of day no longer checked in order to remove the conflicting product
     * @type {object}
     * @property {number} id - id of the conflicting product
     * @property {array<object>} days - array of days (objects) with info about checked and not checked
     * @property {string} date - date the product was opened or empty string
     */
    conflictingProduct = {
      id: conflictId,
      days: newConflictingTimeOfDayChecked,
      date: conflictingProduct.date,
    };

    editDataInLocalStorage(conflictingProduct);

    /**
     * Current product
     */
    const newTimeOfDayChecked = getNewChecks(
      weekRoutine,
      clickedWeekdayName,
      clickedTimeOfTheDay
    );

    setWeekRoutine({ id: id, days: newTimeOfDayChecked, date: openingDate });

    setShowModal(false);
  }

  function handleCloseWarnClicked() {
    setShowWarning(false);
  }

  const classForAlertShown = showModal || showWarning ? "background-blur" : "";

  return (
    <div className="FormModal">
      <article className="modal">
        <Form
          classForAlertShown={classForAlertShown}
          onModalFormSubmit={handleModalFormSubmit}
          name={name}
          weekRoutine={weekRoutine}
          onDayClicked={handleDayClicked}
          onTimeOfDayClicked={handleTimeOfDayClicked}
          onChangeDate={handleChangeDate}
          onCancelAdding={onCancelAdding}
          editMode={editMode}
        />
        {showModal && (
          <AlertModal
            conflictName={conflictName}
            clickedWeekdayName={clickedWeekdayName}
            clickedTimeOfTheDay={clickedTimeOfTheDay}
            onProductSwapClicked={handleProductSwap}
            onCancelAlertModal={() => setShowModal(false)}
          />
        )}
        {showWarning && (
          <WarnModal onCloseWarnClicked={handleCloseWarnClicked} />
        )}
      </article>
    </div>
  );
}
