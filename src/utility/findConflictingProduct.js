import getIndexForWeekday from "./getIndexForWeekday";
import getProductById from "./getProductById";

export function findConflictingProductId(
  weekdayName,
  routineData,
  timeOfDay,
  conflicts
) {
  const indexOfWeekday = getIndexForWeekday(weekdayName);
  const conflictingProduct = routineData
    .filter(
      (product) =>
        product.days[indexOfWeekday].name === weekdayName &&
        product.days[indexOfWeekday][timeOfDay] === true
    )
    .map((product) => product.id)
    .find((id) => conflicts.includes(id));
  return conflictingProduct;
}

export function findConflictProductName(conflictId, products) {
  if (conflictId) {
    const conflictProduct = getProductById(conflictId, products);
    return conflictProduct.name;
  }
}
