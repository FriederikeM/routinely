import getIndexForWeekday from "./getIndexForWeekday";

/**
 * function receives an array of products and checks the objects inside it to
 * find the product that has the given id
 * if there is a product inside the array that has that id, it checks if the
 * product property morning or evening (timeOfDay) is true or false
 * @type {function}
 * @param {array<object>} routineData - list of products, user has added to their routine
 * @param {string} weekdayName - name of the weekday
 * @param {string} timeOfDay - name of time of day morning or evening
 * @param {number} id - product id
 * @returns {boolean} - says whether or not this product is checked on that day and at that time of day
 */

export default function isThisTimeChecked(
  routineData,
  weekdayName,
  timeOfDay,
  id
) {
  const indexForWeekday = getIndexForWeekday(weekdayName);
  const thisProduct = routineData.find((product) => product.id === id);
  if (thisProduct) {
    return thisProduct.days[indexForWeekday][timeOfDay] === true;
  } else {
    return false;
  }
}

/**
 * function receives a product and checks if the day is unchecked but the morning is checked
 * @type {function}
 * @param {object} weekRoutine - the product that the user is currently adding or editing
 * @returns true, if there are days where the morning is checked but the day is not
 */

export function isDayUncheckedButMorningChecked(weekRoutine) {
  const morningChecked = weekRoutine.days
    .map((day) => {
      return day.isChecked === false && day.morning === true;
    })
    .some((day) => day === true);
  return morningChecked;
}

/**
 * function receives a product and checks if the day is unchecked but the evening is checked
 * @type {function}
 * @param {object} weekRoutine - the product that the user is currently adding or editing
 * @returns true, if there are days where the evening is checked but the day is not
 */

export function isDayUncheckedButEveningChecked(weekRoutine) {
  const eveningChecked = weekRoutine.days
    .map((day) => {
      return day.isChecked === false && day.evening === true;
    })
    .some((day) => day === true);
  return eveningChecked;
}

/**
 * function receives a product, finds the days where the morning/evenign is checked but the day isn't
 * then unchecks the morning/evening
 * @type {function}
 * @param {object} weekRoutine
 * @param {string} timeOfDay
 * @returns the new days array with the unchecked morning/evening
 */
export function removeCheckedTimeOfDay(weekRoutine, timeOfDay) {
  const timeOfDayChecked = weekRoutine.days.map((day) => {
    return day.isChecked === false && day[timeOfDay] === true;
  });

  const timeOfDayCheckedIndex = timeOfDayChecked.findIndex(
    (day) => day === true
  );

  const newTimeOfDayChecked = weekRoutine.days.map((day, index) => {
    if (index === timeOfDayCheckedIndex) {
      day[timeOfDay] = !day[timeOfDay];
      return day;
    } else {
      return day;
    }
  });

  return newTimeOfDayChecked;
}
