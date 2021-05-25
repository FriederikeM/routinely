/**
 * function returns items from Local Storage or an empty array
 * @type {function}
 * @returns {array<object>} - list of products or empty array
 */

export function getDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("routine")) || [];

  return data;
}

/**
 * function gets array from Local Storage that represents list of
 * products the user has added to their routine
 * @type {function}
 * @param {object} product - product that user is adding
 */

export function sendDataToLocalStorage(product) {
  const data = getDataFromLocalStorage();

  data.push(product);
  localStorage.setItem("routine", JSON.stringify(data));
}

/**
 * function receives product object, gets routine array from Local Storage,
 * then finds the index of the product object by id
 * it then slices the routine array from 0 to the found index, inserts the updated product and then
 * adds the remaining slice to build a new array
 * @type {function}
 * @param {object} product - product that user is editing
 */

export function editDataInLocalStorage(product) {
  const data = getDataFromLocalStorage();

  const index = data.findIndex((routine) => routine.id === product.id);
  const newData = [...data.slice(0, index), product, ...data.slice(index + 1)];

  localStorage.setItem("routine", JSON.stringify(newData));
}

/**
 *
 * function receives product object, gets routine array from Local Storage
 * then creates a new array that contains all products that do not have the received product's id
 * (creates an array that contains all products except the one the function receives)
 * and then sends the new array without the indicated product to Local Storage
 * @type {function}
 * @param {object} product
 */

export default function removeProductFromLocalStorage(product) {
  const data = getDataFromLocalStorage();

  const newProducts = data.filter((newProduct) => {
    return newProduct.id !== product.id;
  });

  localStorage.setItem("routine", JSON.stringify(newProducts));
}
