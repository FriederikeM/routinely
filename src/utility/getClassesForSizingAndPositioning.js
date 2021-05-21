/**
 * function gives back a class depending on the packaging or the name of a product
 * function is using both parameters as using only packaging would not get the desired result
 * @type {function}
 * @param {string} packaging - product packaging ("glass bottle", "not glass bottle", "glass container")
 * @param {string} name - product name ("100% Niacinamide Powder" or "100% L-Ascorbic Acid Powder")
 * @returns {string} - name of class that gets applied to image for better design layout
 */

export function getClassForAddedPackaging(packaging, name) {
  let classForPackaging;
  if (
    packaging === "not glass bottle" ||
    name === "Glycolic Acid 7% Toning Solution"
  ) {
    classForPackaging = "smaller-added-image";
  } else if (
    name === "100% Niacinamide Powder" ||
    name === "100% L-Ascorbic Acid Powder"
  ) {
    classForPackaging = "added-powder-image";
  } else {
    classForPackaging = "";
  }
  return classForPackaging;
}

/**
 * function gives back a class depending on the packaging of a product
 * @type {function}
 * @param {string} packaging - product packaging ("glass bottle", "not glass bottle", "glass container")
 * @returns {string} - name of class that gets applied to image for better design layout
 */

export function getClassForListedPackaging(packaging) {
  let classForPackaging;
  if (packaging === "not glass bottle") {
    classForPackaging = "smaller-image";
  } else if (packaging === "glass container") {
    classForPackaging = "powder";
  } else {
    classForPackaging = "";
  }
  return classForPackaging;
}

/**
 * function gives back a class depending on the name of the day in order to be able to position checkboxes within a grid
 * @type {function}
 * @param {string} name - product name ("100% Niacinamide Powder" or "100% L-Ascorbic Acid Powder")
 * @returns {string} - name of class that gets applied to divs containing a day's checkboxes
 */

export function getClassForWeekdayCheckboxAlignment(name) {
  let classForWeekdayCheckboxAlignment;
  if (name === "Friday") {
    classForWeekdayCheckboxAlignment = "friday-right";
  } else if (name === "Saturday") {
    classForWeekdayCheckboxAlignment = "saturday-right";
  } else if (name === "Sunday") {
    classForWeekdayCheckboxAlignment = "sunday-right";
  } else if (
    name === "Monday" ||
    name === "Tuesday" ||
    name === "Wendesday" ||
    name === "Thursday"
  ) {
    classForWeekdayCheckboxAlignment = "left";
  } else {
    classForWeekdayCheckboxAlignment = "";
  }

  return classForWeekdayCheckboxAlignment;
}
