import getNewChecks from "./getNewChecks";

// Morning

const productObject = {
  id: 1,
  days: [
    {
      name: "Monday",
      isChecked: true,
      morning: true,
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

test("gives back the opposite of the boolean it encounters for the morning", () => {
  // GIVEN I have a product object, the name of a weekday and the time of day that is being clicked
  const weekday = "Monday";
  const timeOfDay = "morning";
  // WHEN I call the function getNewChecks with these arguments
  const result = getNewChecks(productObject, weekday, timeOfDay);
  // THEN I should get back an array of the all days with the clicked day and time of day being toggled
  const expected = [
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
  ];
  expect(result).toEqual(expected);
});

// Evening

test("gives back the opposite of the boolean it encounters for the evening", () => {
  // GIVEN I have a product object, the name of a weekday and the time of day that is being clicked
  const weekday = "Monday";
  const timeOfDay = "evening";
  // WHEN I call the function getNewChecks with these arguments
  const result = getNewChecks(productObject, weekday, timeOfDay);
  // THEN I should get back an array of the all days with the clicked day and time of day being toggled
  const expected = [
    {
      name: "Monday",
      isChecked: true,
      morning: false,
      evening: true,
    },
    {
      name: "Tuesday",
      isChecked: true,
      morning: true,
      evening: false,
    },
  ];
  expect(result).toEqual(expected);
});
