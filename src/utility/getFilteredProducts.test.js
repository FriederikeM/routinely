import { getProductsFilteredByNameandCategory } from "./getFilteredProducts";
//import products from "./products-mock.json";

test("gives back array of products filtered by category", () => {
  // GIVEN i have an array of products
  const products = [
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
  // WHEN I call getProductsFilteredByNameAndCategory with it and with a category
  const result = getProductsFilteredByNameandCategory(products, "Exfoliators");
  // THEN I should receive an array of products filtered by category
  const expected = [
    {
      id: 1,
      name: "Product1",
      category: "Exfoliators",
    },
    {
      id: 3,
      name: "Product3",
      category: "Exfoliators",
    },
  ];
  expect(result).toEqual(expected);
});

test("gives back empty array filtered by category", () => {
  // GIVEN i have an empty array
  // WHEN I call getProductsFilteredByNameAndCategory with it and with a category
  const result = getProductsFilteredByNameandCategory([], "Exfoliators");
  // THEN I should receive an empty array
  const expected = [];
  expect(result).toEqual(expected);
});

test("gives back array of products filtered by category and name", () => {
  // GIVEN i have an array of products
  const products = [
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
  // WHEN I call getProductsFilteredByNameAndCategory with it and with a category and a name
  const result = getProductsFilteredByNameandCategory(
    products,
    "Exfoliators",
    "3"
  );
  // THEN I should receive an array of products filtered by category and name
  const expected = [
    {
      id: 3,
      name: "Product3",
      category: "Exfoliators",
    },
  ];
  expect(result).toEqual(expected);
});

test("gives back an empty array filtered by category and name", () => {
  // GIVEN i have an empty array
  // WHEN I call getProductsFilteredByNameAndCategory with a category and a name
  const result = getProductsFilteredByNameandCategory([], "Exfoliators", "3");
  // THEN I should receive an empty
  const expected = [];
  expect(result).toEqual(expected);
});
