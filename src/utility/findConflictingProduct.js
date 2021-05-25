import getIndexForWeekday from "./getIndexForWeekday";
import getProductById from "./getProductById";

/**
 * gives back the id of a product that is checked on the given day and
 * time of day (e.g. monday morning) and that has conflict with the product that
 * is currently being clicked on that day and time of day (monday morning) (if a conflicting product exists)
 * @type {function}
 * @param {string} weekdayName
 * @param {array<object>} routineData
 * @param {string} timeOfDay
 * @param {array<object>} conflicts
 * @returns {number}
 */
export function findConflictingProductId(
  weekdayName,
  routineData,
  timeOfDay,
  conflicts
) {
  const indexOfWeekday = getIndexForWeekday(weekdayName);
  const conflictingProduct = routineData
    .filter(
      (product) =>
        product.days[indexOfWeekday].name === weekdayName &&
        product.days[indexOfWeekday][timeOfDay] === true
    )
    .map((product) => product.id)
    .find((id) => conflicts.includes(id));
  return conflictingProduct;
}

/**
 * gives back the name that corresponds to the conflictId returned in the above function (if a conflicting product exists)
 * @type {function}
 * @param {number} conflictId
 * @param {array<object>} products
 * @returns {string}
 */

export function findConflictProductName(conflictId, products) {
  if (conflictId) {
    const conflictProduct = getProductById(conflictId, products);
    return conflictProduct.name;
  }
}
