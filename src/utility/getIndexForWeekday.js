/**
 * function receives the name of a weakday and returns the corresponding index
 * @type {function}
 * @param {string} weekday - name of the weekday
 * @returns {number} - index of the weekday
 */

export default function getIndexForWeekday(weekday) {
  let i;
  switch (weekday) {
    case "Monday":
      i = 0;
      break;
    case "Tuesday":
      i = 1;
      break;
    case "Wednesday":
      i = 2;
      break;
    case "Thursday":
      i = 3;
      break;
    case "Friday":
      i = 4;
      break;
    case "Saturday":
      i = 5;
      break;
    case "Sunday":
      i = 6;
      break;
    default:
  }
  return i;
}
