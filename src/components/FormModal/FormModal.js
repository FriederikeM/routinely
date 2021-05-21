import "./FormModal.css";
import { useEffect, useState } from "react";
import removeProductFromLocalStorage, {
  editDataInLocalStorage,
  getDataFromLocalStorage,
  sendDataToLocalStorage,
} from "../../utility/localStorage";
import { findConflictingProductId } from "../../utility/findConflictingProduct";
import {
  isNothingSelected,
  isNoUnspecifiedSelected,
} from "../../utility/isNotSelected";
import getNewChecks from "../../utility/getNewChecks";
import isThisTimeChecked from "../../utility/isThisTimeChecked";
import Form from "./Form";
import AlertModal from "./AlertModal";
import getProductById from "../../utility/getProductById";
import PropTypes from "prop-types";

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
    /**
     * an array of products (objects) that the user has added to their weekly routine and that gets retrieved from Local Storage
     * @type {array<object>}
     */
    const routineData = getDataFromLocalStorage();

    /**
     * an object that contains the info of the product that was clicked, if it had already been added to the weekly routine
     * @type {object}
     * @property {number} id - product id
     * @property {array<object>} days - array of days (object) with properties: name, isChecked, morning, evening
     * @property {string} date - date when the user opened the product or empty string if info wasn't given
     */
    const sameProduct = routineData.find((product) => {
      return product.id === id;
    });

    sameProduct && setWeekRoutine(sameProduct);
    sameProduct && setEditMode(true);
    setRoutineData(routineData);
  }, [id]);

  /**
   * function that updates state for openingDate and weekRoutine when the user changes the date input
   * @type {function}
   * @param {change} event
   */

  function handleChangeDate(event) {
    const date = event.target.value;
    const newWeekRoutine = weekRoutine;
    newWeekRoutine.date = date;
    setWeekRoutine(newWeekRoutine);
    setOpeningDate(date);
  }

  /**
   * function that updates the weekRoutine state when a user checks the day that is indicated as a parameter and toggles the checkbox being checked or not
   * @type {function}
   * @param {string} name
   */

  function handleDayClicked(name) {
    const newCheckedDays = getNewChecks(weekRoutine, name, "isChecked");
    setWeekRoutine({ id: id, days: newCheckedDays, date: weekRoutine.date });
  }

  /**
   * function that handles when the morning of the day (indicated by name) is clicked
   * it finds out if a conflicting product has already been checked on that day in the
   * morning and then updates the conflictId and conflictName state accordingly
   * as well as the state of the day and timeOfDay to when the product was clicked (e.g. monday morning)
   * @type {function}
   * @param {string} name
   */

  function handleMorningClicked(name) {
    /**
     * an integer representing the id of a product that is already used that day and at that time of day and that should not be used simultaneously with the currently displayed product
     * @type {number}
     */
    const conflictingId = findConflictingProductId(
      name,
      routineData,
      "morning",
      conflicts
    );
    setConflictId(conflictingId);

    /**
     * the name of the product that has conflict with the product that is currently displayed
     * @type {string}
     */
    if (conflictId) {
      const conflictName = getProductById(conflictingId, products).name;
      setConflictName(conflictName);
    }
    setClickedWeekdayName(name);
    setClickedTimeOfTheDay("morning");

    /**
     * variable that says whether or not the checkbox that I am clicking is checked or unchecked
     * @type {boolean}
     */
    const alreadyChecked = isThisTimeChecked(routineData, name, "morning", id);

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
      const newMorningChecked = getNewChecks(weekRoutine, name, "morning");
      setWeekRoutine({
        id: id,
        days: newMorningChecked,
        date: weekRoutine.date,
      });
    }
  }

  /**
   * function does the same as the function above, but for when the evening is clicked
   * @type {function}
   * @param {string} name
   */

  function handleEveningClicked(name) {
    const conflictingId = findConflictingProductId(
      name,
      routineData,
      "evening",
      conflicts
    );
    setConflictId(conflictingId);
    const conflictName = getProductById(conflictingId, products).name;
    setConflictName(conflictName);
    setClickedWeekdayName(name);
    setClickedTimeOfTheDay("evening");

    const alreadyChecked = isThisTimeChecked(routineData, name, "evening", id);

    if (conflictingId && alreadyChecked === false) {
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

  function handleProductSwap() {
    let conflictingProduct = routineData.find(
      (product) => product.id === conflictId
    );

    const newConflictingTimeOfDayChecked = getNewChecks(
      conflictingProduct,
      clickedWeekdayName,
      clickedTimeOfTheDay
    );

    conflictingProduct = {
      id: conflictId,
      days: newConflictingTimeOfDayChecked,
      date: conflictingProduct.date,
    };

    editDataInLocalStorage(conflictingProduct);

    const newTimeOfDayChecked = getNewChecks(
      weekRoutine,
      clickedWeekdayName,
      clickedTimeOfTheDay
    );

    setWeekRoutine({ id: id, days: newTimeOfDayChecked, date: openingDate });

    setShowModal(false);
  }

  const classForAlertShown = showModal ? "background-blur" : "";

  return (
    <div className="FormModal">
      <article className="modal">
        <Form
          classForAlertShown={classForAlertShown}
          onModalFormSubmit={handleModalFormSubmit}
          name={name}
          weekRoutine={weekRoutine}
          onDayClicked={handleDayClicked}
          onMorningClicked={handleMorningClicked}
          onEveningClicked={handleEveningClicked}
          onChangeDate={handleChangeDate}
          onCancelAdding={onCancelAdding}
          editMode={editMode}
        />
        {showModal && (
          <AlertModal
            conflictId={conflictId}
            conflictName={conflictName}
            clickedWeekdayName={clickedWeekdayName}
            clickedTimeOfTheDay={clickedTimeOfTheDay}
            onProductSwapClicked={handleProductSwap}
            onCancelAlertModal={() => setShowModal(false)}
          />
        )}
      </article>
    </div>
  );
}
