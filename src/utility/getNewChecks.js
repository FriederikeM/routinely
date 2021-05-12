export default function getNewChecks(weekRoutine, name, isCheckedHere) {
  return weekRoutine.days.map((day) => {
    if (day.name === name) {
      day[isCheckedHere] = !day[isCheckedHere];
      return day;
    } else {
      return day;
    }
  });
}
