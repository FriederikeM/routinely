import {
  getProductsCheckedOnThisDay,
  getProductsCheckedOnThisTimeOfDay,
} from "./getCheckedProducts";

// Checked on day

test("gives back an array of products, which are checked on the same day", () => {
  // GIVEN the name of a weekday and an array of products from LS
  const weekdayName = "Monday";
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
          isChecked: false,
          morning: false,
          evening: false,
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
  // WHEN I call getProductsCheckedOnThatDay with the name of the day and the product array
  const result = getProductsCheckedOnThisDay(weekdayName, productsArray);
  // THEN I should receive an array of products that are checked on the day that was given
  const expected = [
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
  ];
  expect(result).toEqual(expected);
});

test("gives back an empty array when given an array of products, where none are checked on the given day", () => {
  // GIVEN the name of a weekday and an array of products from LS that are not checked on the given day
  const weekdayName = "Monday";
  const productsArray = [
    {
      id: 1,
      days: [
        {
          name: "Monday",
          isChecked: false,
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
          isChecked: false,
          morning: false,
          evening: false,
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
  // WHEN I call getProductsCheckedOnThatDay with the name of the day and the product array
  const result = getProductsCheckedOnThisDay(weekdayName, productsArray);
  // THEN I should receive an array of products that are checked on the day that was given
  const expected = [];
  expect(result).toEqual(expected);
});

test("gives back an empty array when given an empty array of products and a weekday name", () => {
  // GIVEN the name of a weekday and an empty array
  const weekdayName = "Monday";
  const productsArray = [];
  // WHEN I call getProductsCheckedOnThatDay with the name of the day and the product array
  const result = getProductsCheckedOnThisDay(weekdayName, productsArray);
  // THEN I should receive an array of products that are checked on the day that was given
  const expected = [];
  expect(result).toEqual(expected);
});

// Time of Day Checked

test("gives back an array of products that are used at the given time of day", () => {
  // GIVEN the name of the weekday, an array of products used on that day and the name of the day time (morning or evening)
  const weekdayName = "Monday";
  const timeOfDay = "morning";
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
          isChecked: false,
          morning: false,
          evening: false,
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
  // WHEN I call the function getProductsCheckedOnThisTimeOfDay with all these arguments
  const result = getProductsCheckedOnThisTimeOfDay(
    weekdayName,
    productsArray,
    timeOfDay
  );
  // THEN I should receive an array of products that are used on that day and during that time of day
  const expected = [
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
  ];
  expect(result).toEqual(expected);
});

test("gives back an empty array of products if the given products array doesn't contain a products that is checked on the indicated time of day and day", () => {
  // GIVEN the name of the weekday, an array of products used on that day and the name of the day time (morning or evening)
  const weekdayName = "Monday";
  const timeOfDay = "morning";
  const productsArray = [
    {
      id: 1,
      days: [
        {
          name: "Monday",
          isChecked: false,
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
          isChecked: false,
          morning: false,
          evening: false,
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
  // WHEN I call the function getProductsCheckedOnThisTimeOfDay with all these arguments
  const result = getProductsCheckedOnThisTimeOfDay(
    weekdayName,
    productsArray,
    timeOfDay
  );
  // THEN I should receive an array of products that are used on that day and during that time of day
  const expected = [];
  expect(result).toEqual(expected);
});

test("gives back an empty array of products if the given products array is empty", () => {
  // GIVEN the name of the weekday, an array of products used on that day and the name of the day time (morning or evening)
  const weekdayName = "Monday";
  const timeOfDay = "morning";
  const productsArray = [];
  // WHEN I call the function getProductsCheckedOnThisTimeOfDay with all these arguments
  const result = getProductsCheckedOnThisTimeOfDay(
    weekdayName,
    productsArray,
    timeOfDay
  );
  // THEN I should receive an array of products that are used on that day and during that time of day
  const expected = [];
  expect(result).toEqual(expected);
});
