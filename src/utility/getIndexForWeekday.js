export default function getIndexForWeekday(weekday) {
  let i;
  switch (weekday) {
    case "Monday":
      i = 0;
      break;
    case "Tuesday":
      i = 1;
      break;
    case "Wednesday":
      i = 2;
      break;
    case "Thursday":
      i = 3;
      break;
    case "Firday":
      i = 4;
      break;
    case "Saturday":
      i = 5;
      break;
    case "Sunday":
      i = 6;
      break;
    default:
  }
  return i;
}
