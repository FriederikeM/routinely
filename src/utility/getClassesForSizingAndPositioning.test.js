import {
  getClassForAddedPackaging,
  getClassForListedPackaging,
  getClassForWeekdayCheckboxAlignment,
} from "./getClassesForSizingAndPositioning";

// Added products

test("gives back the name of a class", () => {
  // GIVEN a string representing the type of packaging and a string representing the name of a product
  const packaging = "not glass bottle";
  const productName = "AHA + BHA";
  // WHEN I call the function getClassForAddedPackaging with these arguments
  const result = getClassForAddedPackaging(packaging, productName);
  // THEN I shoud receive the correct className
  const expected = "smaller-added-image";

  expect(result).toBe(expected);
});

test("gives back an empty string if the packging isn't 'not glass bottle' and the name isn't '100% Niacinamide Powder' or '100% L-Ascorbic Acid Powder'", () => {
  // GIVEN a string representing the type of packaging and a string representing the name of a product
  const packaging = "glass bottle";
  const productName = "AHA + BHA";
  // WHEN I call the function getClassForAddedPackaging with these arguments
  const result = getClassForAddedPackaging(packaging, productName);
  // THEN I shoud receive the correct className
  const expected = "";

  expect(result).toBe(expected);
});

// Listed Products

test("gives back the name of the class for an image depending on packaging", () => {
  // GIVEN a string representing the type of packaging and a string representing the name of a product
  const packaging = "not glass bottle";
  // WHEN I call the function getClassForAddedPackaging with these arguments
  const result = getClassForListedPackaging(packaging);
  // THEN I shoud receive the correct className
  const expected = "smaller-image";

  expect(result).toBe(expected);
});

test("gives an empty string if the packaging isn't either not glass bottle or glass container", () => {
  // GIVEN a string representing the type of packaging and a string representing the name of a product
  const packaging = "glass bottle";
  // WHEN I call the function getClassForAddedPackaging with these arguments
  const result = getClassForListedPackaging(packaging);
  // THEN I shoud receive the correct className
  const expected = "";

  expect(result).toBe(expected);
});

// Weekday Checkboxes

test("gives back the name of the class depending on which day of the week it is passed as an argument", () => {
  // GIVEN a string of either 'Friday', 'Saturday' or 'Sunday'
  const day = "Sunday";
  // WHEN I call the function getClassForWeekdayCheckboxAlignment with the day as an argument
  const result = getClassForWeekdayCheckboxAlignment(day);
  // THEN I should receive the string 'friday-right', 'saturday-right' or 'sunday-right' respectively
  const expected = "sunday-right";

  expect(result).toBe(expected);
});

test("gives back the class 'left' depending on which day of the week it is passed as an argument", () => {
  // GIVEN a string of either 'Monday', 'Tuesday', 'Wednesday' or 'Thursday'
  const day = "Monday";
  // WHEN I call the function getClassForWeekdayCheckboxAlignment with the day as an argument
  const result = getClassForWeekdayCheckboxAlignment(day);
  // THEN I should receive the string 'left'
  const expected = "left";

  expect(result).toBe(expected);
});

test("gives empty string, if the argument passed is anything other than the days of the week", () => {
  // GIVEN a string of anything other than 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' or 'Sunday'
  const day = "Montag";
  // WHEN I call the function getClassForWeekdayCheckboxAlignment with the day as an argument
  const result = getClassForWeekdayCheckboxAlignment(day);
  // THEN I should receive the string 'left'
  const expected = "";

  expect(result).toBe(expected);
});
