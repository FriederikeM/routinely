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
