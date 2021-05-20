import {
  findConflictingProductId,
  findConflictProductName,
} from "./findConflictingProduct";

// Conflict Id

test("gives back an integer that represents the id of a conflicting product when supplied with an array of products, the time of day, the name of the weekday and an array of conflicting products", () => {
  // GIVEN an array of products saved in LS, the name of the day that was clicked, the time of the day that was clicked, and an array of conflicting ids for the clicked product
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

  const conflicts = [3, 4];
  const userCheckedDay = "Monday";
  const userCheckedTimeOfDay = "morning";
  // WHEN I call findConflictingProductId with all these element
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

// Conflict Name

test("gives back the name of the conflicting product when sent an id and an array of products", () => {
  // GIVEN an array of products and an integer representing an id
  const productsArray = [
    {
      id: 1,
      name: "Product1",
      category: "Exfoliators",
    },
    {
      id: 2,
      name: "Product2",
      category: "Toners",
    },
    {
      id: 3,
      name: "Product3",
      category: "Exfoliators",
    },
  ];

  const id = 2;
  // WHEN I call findConflictingProductId with all these element
  const result = findConflictProductName(id, productsArray);
  // THEN I should receive undefined
  const expected = "Product2";

  expect(result).toBe(expected);
});

test("gives back undefined when sent an id that is undefined and an array of products", () => {
  // GIVEN an array of products and an integer representing an id
  const productsArray = [
    {
      id: 1,
      name: "Product1",
      category: "Exfoliators",
    },
    {
      id: 2,
      name: "Product2",
      category: "Toners",
    },
    {
      id: 3,
      name: "Product3",
      category: "Exfoliators",
    },
  ];

  const id = undefined;
  // WHEN I call findConflictingProductId with all these element
  const result = findConflictProductName(id, productsArray);
  // THEN I should receive undefined
  const expected = undefined;

  expect(result).toBe(expected);
});
