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
  return morningChecked;
}

export function isDayUncheckedButEveningChecked(weekRoutine) {
  const eveningChecked = weekRoutine.days
    .map((day) => {
      return day.isChecked === false && day.evening === true;
    })
    .some((day) => day === true);
  return eveningChecked;
}

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
