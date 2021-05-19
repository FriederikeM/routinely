import getIndexForWeekday from "./getIndexForWeekday";
import getProductById from "./getProductById";

export function findConflictingProductId(
  name,
  routineData,
  timeOfDay,
  conflicts
) {
  const indexOfWeekday = getIndexForWeekday(name);
  const conflictingProduct = routineData
    .filter(
      (product) =>
        product.days[indexOfWeekday].name === name &&
        product.days[indexOfWeekday][timeOfDay] === true
    )
    .map((product) => product.id)
    .find((id) => conflicts.includes(id));
  return conflictingProduct;
}

export function findConflictProductName(intersection, products) {
  const conflictName = intersection.map((id) => {
    const conflictProduct = getProductById(id, products);
    return conflictProduct.name;
  });
  return conflictName;
}
