import "./FormModal.css";
import Checkbox from "./Checkbox.js";
import { useState } from "react";
import { sendDataToLocalStorage } from "../utility/localStorage";

export default function FormModal({ onCancelAdding, id }) {
  const [mondayMorningChecked, setMondayMorningChecked] = useState(false);
  const [mondayEveningChecked, setMondayEveningChecked] = useState(false);

  const [tuesdayMorningChecked, setTuesdayMorningChecked] = useState(false);
  const [tuesdayEveningChecked, setTuesdayEveningChecked] = useState(false);

  const [wednesdayMorningChecked, setWednesdayMorningChecked] = useState(false);
  const [wednesdayEveningChecked, setWednesdayEveningChecked] = useState(false);

  const [thursdayMorningChecked, setThursdayMorningChecked] = useState(false);
  const [thursdayEveningChecked, setThursdayEveningChecked] = useState(false);

  const [fridayMorningChecked, setFridayMorningChecked] = useState(false);
  const [fridayEveningChecked, setFridayEveningChecked] = useState(false);

  const [saturdayMorningChecked, setSaturdayMorningChecked] = useState(false);
  const [saturdayEveningChecked, setSaturdayEveningChecked] = useState(false);

  const [sundayMorningChecked, setSundayMorningChecked] = useState(false);
  const [sundayEveningChecked, setSundayEveningChecked] = useState(false);

  const [openingDate, setOpeningDate] = useState("");

  function handleChangeDate(event) {
    const date = event.target.value;
    setOpeningDate(date);
  }

  function handleModalFormSubmit(event) {
    event.preventDefault();
    sendDataToLocalStorage(id, {
      monday: {
        mondayMorning: mondayMorningChecked,
        mondayEvening: mondayEveningChecked,
      },
      tuesday: {
        tuesdayMorning: tuesdayMorningChecked,
        tuesdayEvening: tuesdayEveningChecked,
      },
      wednesday: {
        wednesdayMorning: wednesdayMorningChecked,
        wednesdayEvening: wednesdayEveningChecked,
      },
      thursday: {
        thursdayMorning: thursdayMorningChecked,
        thursdayEvening: thursdayEveningChecked,
      },
      friday: {
        fridayMorning: fridayMorningChecked,
        fridayEvening: fridayEveningChecked,
      },
      saturday: {
        saturdayMorning: saturdayMorningChecked,
        saturdayEvening: saturdayEveningChecked,
      },
      sunday: {
        sundayMorning: sundayMorningChecked,
        sundayEvening: sundayEveningChecked,
      },
      opened: openingDate,
    });
  }

  return (
    <div className="FormModal">
      <article className="modal">
        <form className="routine-info-form" onSubmit={handleModalFormSubmit}>
          <p className="day-question">
            Which days would you like to add this product to?
          </p>
          <div className="mon-thurs">
            <Checkbox
              name="Monday"
              onChangeMorning={(e) => {
                setMondayMorningChecked(!mondayMorningChecked);
              }}
              onChangeEvening={(e) => {
                setMondayEveningChecked(!mondayEveningChecked);
              }}
            />
            <Checkbox
              name="Tuesday"
              onChangeMorning={(e) => {
                setTuesdayMorningChecked(!tuesdayMorningChecked);
              }}
              onChangeEvening={(e) => {
                setTuesdayEveningChecked(!tuesdayEveningChecked);
              }}
            />
            <Checkbox
              name="Wednesday"
              onChangeMorning={(e) => {
                setWednesdayMorningChecked(!wednesdayMorningChecked);
              }}
              onChangeEvening={(e) => {
                setWednesdayEveningChecked(!wednesdayEveningChecked);
              }}
            />
            <Checkbox
              name="Thursday"
              onChangeMorning={(e) => {
                setThursdayMorningChecked(!thursdayMorningChecked);
              }}
              onChangeEvening={(e) => {
                setThursdayEveningChecked(!thursdayEveningChecked);
              }}
            />
          </div>
          <div className="fri-sun">
            <Checkbox
              name="Friday"
              onChangeMorning={(e) => {
                setFridayMorningChecked(!fridayMorningChecked);
              }}
              onChangeEvening={(e) => {
                setFridayEveningChecked(!fridayEveningChecked);
              }}
            />
            <Checkbox
              name="Saturday"
              onChangeMorning={(e) => {
                setSaturdayMorningChecked(!saturdayMorningChecked);
              }}
              onChangeEvening={(e) => {
                setSaturdayEveningChecked(!saturdayEveningChecked);
              }}
            />
            <Checkbox
              name="Sunday"
              onChangeMorning={(e) => {
                setSundayMorningChecked(!sundayMorningChecked);
              }}
              onChangeEvening={(e) => {
                setSundayEveningChecked(!sundayEveningChecked);
              }}
            />
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
