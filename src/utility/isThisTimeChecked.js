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
