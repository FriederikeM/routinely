import { isNothingSelected, isNoUnspecifiedSelected } from "./isNotSelected";

// Nothing selected

test("gives back true if no day has been checked", () => {
  // GIVEN I have a product object that contains an array of days
  const productObject = {
    id: 2,
    days: [
      {
        name: "Monday",
        isChecked: false,
        morning: false,
        evening: false,
      },
      {
        name: "Tuesday",
        isChecked: false,
        morning: false,
        evening: false,
      },
    ],
  };
  // WHEN I execute the function isNothingSelected with the object as an agrument
  const result = isNothingSelected(productObject);

  // THEN I should receive true if 'isChecked' is false for all days and false if isChecked is NOT false for all days
  const expected = true;

  expect(result).toEqual(expected);
});

test("gives back undefined if no argument is passed", () => {
  // GIVEN I have nothing
  // WHEN I execute the function isNothingSelected with no agrument
  const result = isNothingSelected();

  // THEN I should receive true if 'isChecked' is false for all days and false if isChecked is NOT false for all days
  const expected = undefined;

  expect(result).toEqual(expected);
});

// No Unspecified Selected

test("gives back true if not only a day has been checked, but also the time of day", () => {
  // GIVEN I have a product object that contains an array of days
  const productObject = {
    id: 2,
    days: [
      {
        name: "Monday",
        isChecked: true,
        morning: true,
        evening: false,
      },
      {
        name: "Tuesday",
        isChecked: false,
        morning: false,
        evening: false,
      },
    ],
  };
  // WHEN I execute the function isNothingSelected with the object as an agrument
  const result = isNoUnspecifiedSelected(productObject);

  // THEN I should receive true if for every day that isChecked, also either morning or evening is checked
  const expected = true;

  expect(result).toEqual(expected);
});

test("gives back false if day has been checked, but not the time of day", () => {
  // GIVEN I have a product object that contains an array of days
  const productObject = {
    id: 2,
    days: [
      {
        name: "Monday",
        isChecked: true,
        morning: false,
        evening: false,
      },
      {
        name: "Tuesday",
        isChecked: true,
        morning: true,
        evening: false,
      },
    ],
  };
  // WHEN I execute the function isNothingSelected with the object as an agrument
  const result = isNoUnspecifiedSelected(productObject);

  // THEN I should receive false if not for all days that have isChecked true, morning or evening is checked too
  const expected = false;

  expect(result).toEqual(expected);
});

test("gives back undefined if nothing is passed as an argument", () => {
  // GIVEN I have nothing
  // WHEN I execute the function isNothingSelected with no agrument
  const result = isNoUnspecifiedSelected();

  // THEN I should receive true if 'isChecked' is false for all days and false if isChecked is NOT false for all days
  const expected = undefined;

  expect(result).toEqual(expected);
});
