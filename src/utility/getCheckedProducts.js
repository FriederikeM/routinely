import getIndexForWeekday from "./getIndexForWeekday";

export function getProductsCheckedOnThisDay(weekday, allItems) {
  const weekdayIndex = getIndexForWeekday(weekday);

  const checkedProducts = allItems.filter((item) => {
    return item.days[weekdayIndex].isChecked;
  });
  return checkedProducts;
}

export function getProductsCheckedOnThisMorning(weekday, data) {
  const weekdayIndex = getIndexForWeekday(weekday);
  const mornings = data.filter((item) => {
    return item.days[weekdayIndex].morning;
  });
  return mornings;
}

export function getProductsCheckedOnThisEvening(weekday, data) {
  const weekdayIndex = getIndexForWeekday(weekday);
  const evenings = data.filter((item) => {
    return item.days[weekdayIndex].evening;
  });
  return evenings;
}
