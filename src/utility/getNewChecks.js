/**
 * function maps over the days array inside the product object that user is checking
 * then finds the day that the user clicked by comparing the day's name (day.name) to
 * the name the function receives (weekdayName)
 * on this day it then toggles the boolean of the timeOfDay and returns the updated day
 * and the other days in their previous state
 * @type {function}
 * @param {object} weekRoutine - info about product with properties: id, days (array), date
 * @param {string} weekdayName - name of the day of the week that function receives
 * @param {string} clickedTimeOfDay - name of the time of day that function receives
 * @returns {array<object>} - list of days with the info (property) of when they have been checked and when they haven't
 */

export default function getNewChecks(
  weekRoutine,
  weekdayName,
  clickedTimeOfDay
) {
  return weekRoutine.days.map((day) => {
    if (day.name === weekdayName) {
      day[clickedTimeOfDay] = !day[clickedTimeOfDay];
      return day;
    } else {
      return day;
    }
  });
}
