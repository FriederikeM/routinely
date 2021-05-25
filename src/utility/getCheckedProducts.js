import getIndexForWeekday from "./getIndexForWeekday";

/**
 * takes name of weekday and turns it into an index, which it then uses to
 * filter out the product objects out of the allItems array, that are checked on that day
 * @param {string} weekday - name of weekday (Monday - Sunday)
 * @param {array<object>} allItems - list of products in user's weekly routine
 * @returns {array<object>} - list of products used on the indicated weekday
 */

export function getProductsCheckedOnThisDay(weekday, allItems) {
  const weekdayIndex = getIndexForWeekday(weekday);

  const checkedProducts = allItems.filter((item) => {
    return item.days[weekdayIndex].isChecked;
  });
  return checkedProducts;
}

/**
 * takes name of weekday and turns it into an index, which it then uses to
 * filter out the product objects out of the array of products used that day (which was returned by the function above)
 * that are checked on that timeOfDay (morning or evening)
 * @param {string} weekday - name of weekday (Monday - Sunday)
 * @param {array<object>} data - list of products used on the indicated weekday
 * @returns {array<object>} - list of products used on the indicated weekday during the indicated time of day
 */
export function getProductsCheckedOnThisTimeOfDay(weekday, data, timeOfDay) {
  const weekdayIndex = getIndexForWeekday(weekday);
  const productsOfTimeOfDay = data.filter((item) => {
    return item.days[weekdayIndex][timeOfDay];
  });
  return productsOfTimeOfDay;
}
