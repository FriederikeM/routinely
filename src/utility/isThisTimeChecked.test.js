import isThisTimeChecked from "./isThisTimeChecked";

test("gives back true if you click a checkbox that is checked", () => {
  // GIVEN I have an array of products from LS, the name of the weekday where the checkbox gets clicked and the time of day that was clicked, as well as the id of the product
  const weekday = "Monday";
  const timeOfDay = "morning";
  const id = 1;
  const productsArray = [
    {
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
    },
    {
      id: 2,
      days: [
        {
          name: "Monday",
          isChecked: true,
          morning: false,
          evening: true,
        },
        {
          name: "Tuesday",
          isChecked: true,
          morning: false,
          evening: true,
        },
      ],
    },
  ];
  // WHEN I execute the function isThisTimeChecked with these arguments
  const result = isThisTimeChecked(productsArray, weekday, timeOfDay, id);
  // THEN I should receive true
  const expected = true;

  expect(result).toEqual(expected);
});

test("gives back false if you click a checkbox that is not checked yet", () => {
  // GIVEN I have an array of products from LS, the name of the weekday where the checkbox gets clicked and the time of day that was clicked, as well as the id of the product
  const weekday = "Monday";
  const timeOfDay = "morning";
  const id = 1;
  const productsArray = [
    {
      id: 1,
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
    },
    {
      id: 2,
      days: [
        {
          name: "Monday",
          isChecked: true,
          morning: false,
          evening: true,
        },
        {
          name: "Tuesday",
          isChecked: true,
          morning: false,
          evening: true,
        },
      ],
    },
  ];
  // WHEN I execute the function isThisTimeChecked with these arguments
  const result = isThisTimeChecked(productsArray, weekday, timeOfDay, id);
  // THEN I should receive true
  const expected = false;

  expect(result).toEqual(expected);
});
