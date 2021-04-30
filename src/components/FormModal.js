import "./FormModal.css";
import Checkbox from "./Checkbox.js";
import { useState } from "react";
import { sendDataToLocalStorage } from "../utility/localStorage";

export default function FormModal({ onCancelAdding, id }) {
  // const [mondayMorningChecked, setMondayMorningChecked] = useState(false);
  // const [mondayEveningChecked, setMondayEveningChecked] = useState(false);

  // const [tuesdayMorningChecked, setTuesdayMorningChecked] = useState(false);
  // const [tuesdayEveningChecked, setTuesdayEveningChecked] = useState(false);

  // const [wednesdayMorningChecked, setWednesdayMorningChecked] = useState(false);
  // const [wednesdayEveningChecked, setWednesdayEveningChecked] = useState(false);

  // const [thursdayMorningChecked, setThursdayMorningChecked] = useState(false);
  // const [thursdayEveningChecked, setThursdayEveningChecked] = useState(false);

  // const [fridayMorningChecked, setFridayMorningChecked] = useState(false);
  // const [fridayEveningChecked, setFridayEveningChecked] = useState(false);

  // const [saturdayMorningChecked, setSaturdayMorningChecked] = useState(false);
  // const [saturdayEveningChecked, setSaturdayEveningChecked] = useState(false);

  // const [sundayMorningChecked, setSundayMorningChecked] = useState(false);
  // const [sundayEveningChecked, setSundayEveningChecked] = useState(false);

  const [weekRoutine, setWeekRoutine] = useState({
    days: [
      {
        weekDay: "Monday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        weekDay: "Tuesday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        weekDay: "Wednesday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        weekDay: "Thursday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        weekDay: "Friday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        weekDay: "Saturday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        weekDay: "Sunday",
        isChecked: false,
        morning: false,
        evening: false,
      },
    ],
  });

  const [openingDate, setOpeningDate] = useState("");

  function handleChangeDate(event) {
    const date = event.target.value;
    setOpeningDate(date);
  }

  function handleModalFormSubmit(event) {
    event.preventDefault();
    sendDataToLocalStorage(weekRoutine);
  }

  function handleDayClicked(name) {
    const newCheckedDays = weekRoutine.days.map((day) => {
      if (day.weekDay === name) {
        day.isChecked = !day.isChecked;
        return day;
      } else {
        return day;
      }
    });
    setWeekRoutine({ id: id, days: newCheckedDays, openingDate });
  }

  function handleMorningClicked(name) {
    const newMorningChecked = weekRoutine.days.map((day) => {
      if (day.weekDay === name) {
        day.morning = !day.morning;
        return day;
      } else {
        return day;
      }
    });
    setWeekRoutine({ id: id, days: newMorningChecked, openingDate });
  }

  function handleEveningClicked(name) {
    const newEveningChecked = weekRoutine.days.map((day) => {
      if (day.weekDay === name) {
        day.evening = !day.evening;
        return day;
      } else {
        return day;
      }
    });
    setWeekRoutine({ id: id, days: newEveningChecked, openingDate });
  }
  console.log(weekRoutine);
  return (
    <div className="FormModal">
      <article className="modal">
        <form className="routine-info-form" onSubmit={handleModalFormSubmit}>
          <p className="day-question">
            Which days would you like to add this product to?
          </p>
          <div className="mon-thurs">
            {" "}
            {weekRoutine.days.map((day) => {
              return (
                <Checkbox
                  name={day.weekDay}
                  handleDayClicked={handleDayClicked}
                  // onChangeMorning={(e) => {
                  //   setMondayMorningChecked(!mondayMorningChecked);
                  // }}
                  // onChangeEvening={(e) => {
                  //   setMondayEveningChecked(!mondayEveningChecked);
                  // }}
                  isChecked={day.isChecked}
                  morning={day.morning}
                  evening={day.evening}
                  handleMorningClicked={handleMorningClicked}
                  handleEveningClicked={handleEveningClicked}
                />
              );
            })}
            {/* <Checkbox
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
            /> */}
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
