import getIndexForWeekday from "./getIndexForWeekday";

export default function isThisTimeChecked(routineData, name, timeOfDay, id) {
  const indexForWeekday = getIndexForWeekday(name);
  const thisProduct = routineData.find((product) => product.id === id);
  if (thisProduct) {
    return thisProduct.days[indexForWeekday][timeOfDay] === true;
  } else {
    return false;
  }
}

export function isDayUncheckedButMorningChecked(weekRoutine) {
  const morningChecked = weekRoutine.days
    .map((day) => {
      return day.isChecked === false && day.morning === true;
    })
    .some((day) => day === true);
  console.log(morningChecked);
  return morningChecked;
}

export function isDayUncheckedButEveningChecked(weekRoutine) {
  const eveningChecked = weekRoutine.days
    .map((day) => {
      return day.isChecked === false && day.evening === true;
    })
    .some((day) => day === true);
  console.log(eveningChecked);
  return eveningChecked;
}
