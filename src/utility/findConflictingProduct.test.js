import { findConflictingProductId } from "./findConflictingProduct";

// Conflict Id

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

test("gives back an integer that represents the id of a conflicting product when supplied with an array of products, the time of day, the name of the weekday and an array of conflicting products", () => {
  // GIVEN an array of products saved in LS, the name of the day that was clicked, the time of the day that was clicked, and an array of conflicting ids for the clicked product
  const conflicts = [1, 3, 4];
  const userCheckedDay = "Monday";
  const userCheckedTimeOfDay = "morning";
  // WHEN I call findConflictingProductId with all these elements
  const result = findConflictingProductId(
    userCheckedDay,
    productsArray,
    userCheckedTimeOfDay,
    conflicts
  );
  // THEN I should receive an integer representing the id of the product that has already been checked that day
  const expected = 1;

  expect(result).toBe(expected);
});

test("gives back undefined if the array of conflicts doesn't include an id of the array of products from LS", () => {
  // GIVEN an array of products saved in LS, the name of the day that was clicked, the time of the day that was clicked, and an array of conflicting ids for the clicked product
  const conflicts = [3, 4];
  const userCheckedDay = "Monday";
  const userCheckedTimeOfDay = "morning";
  // WHEN I call findConflictingProductId with all these arguments
  const result = findConflictingProductId(
    userCheckedDay,
    productsArray,
    userCheckedTimeOfDay,
    conflicts
  );
  // THEN I should receive undefined
  const expected = undefined;

  expect(result).toBe(expected);
});
