export function isNothingSelected(weekRoutine) {
  if (weekRoutine) {
    return weekRoutine.days
      .map((day) => {
        return day.isChecked === false;
      })
      .every((day) => day === true);
  }
}

export function isNoUnspecifiedSelected(weekRoutine) {
  if (weekRoutine) {
    return weekRoutine.days
      .map((day) => {
        return (
          day.isChecked === true &&
          day.morning === false &&
          day.evening === false
        );
      })
      .every((check) => check === false);
  }
}
