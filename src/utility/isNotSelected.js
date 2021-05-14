export function isNothingSelected(weekRoutine) {
  return weekRoutine.days
    .map((day) => {
      return day.isChecked === false;
    })
    .every((day) => day === true);
}

export function isNoUnspecifiedSelected(weekRoutine) {
  return weekRoutine.days
    .map((day) => {
      return (
        day.isChecked === true && day.morning === false && day.evening === false
      );
    })
    .every((check) => check === false);
}
