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
export function findConflictingProductsIds(
  weekdayName,
  routineData,
  timeOfDay,
  conflicts
) {
  const indexOfWeekday = getIndexForWeekday(weekdayName);
  const conflictingProducts = routineData
    .filter(
      (product) =>
        product.days[indexOfWeekday].name === weekdayName &&
        product.days[indexOfWeekday][timeOfDay] === true
    )
    .map((product) => product.id)
    .filter((id) => conflicts.includes(id));
  return conflictingProducts;
}

/**
 * gives back the name that corresponds to the conflictId returned in the above function (if a conflicting product exists)
 * @type {function}
 * @param {number} conflictId
 * @param {array<object>} products
 * @returns {string}
 */

export function findConflictProductName(conflictIds, products) {
  if (!!conflictIds.length) {
    const conflictName = conflictIds.map((id) => {
      const conflictProduct = getProductById(id, products);
      return conflictProduct.name;
    });
    return conflictName;
  }
}
