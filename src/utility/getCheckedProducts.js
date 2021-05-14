import getIndexForWeekday from "./getIndexForWeekday";

export function getProductsCheckedOnThisDay(weekday, allItems) {
  const weekdayIndex = getIndexForWeekday(weekday);

  const checkedProducts = allItems.filter((item) => {
    return item.days[weekdayIndex].isChecked;
  });
  return checkedProducts;
}

export function getProductsCheckedOnThisTimeOfDay(weekday, data, timeOfDay) {
  const weekdayIndex = getIndexForWeekday(weekday);
  const productsOfTimeOfDay = data.filter((item) => {
    return item.days[weekdayIndex][timeOfDay];
  });
  return productsOfTimeOfDay;
}
