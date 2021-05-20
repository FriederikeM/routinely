import getNewChecks from "./getNewChecks";

test("gives back the opposite of the boolean it encounters", () => {
  // GIVEN I have a product object, the name of a weekday and the time of day that is being clicked
  const weekday = "Monday";
  const timeOfDay = "morning";
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
