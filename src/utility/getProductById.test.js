import getProductById from "./getProductById";

test("gives back an object it found based on an id parameter and an array of products", () => {
  // GIVEN I have a product id and an array of product objects
  const id = 1;
  const productArray = [
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
  // WHEN I call the function getProductById with the productsArray and the id
  const result = getProductById(id, productArray);
  // THEN I should receive an object containing the product info
  const expected = {
    id: 1,
    name: "Product1",
    category: "Exfoliators",
  };
  expect(result).toEqual(expected);
});

test("gives back undefined if I am looking for a product id that isn't present in the product array", () => {
  // GIVEN I have a product id and an array of product objects
  const id = 4;
  const productArray = [
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
  // WHEN I call the function getProductById with the productsArray and the id
  const result = getProductById(id, productArray);
  // THEN I should receive an object containing the product info
  const expected = undefined;
  expect(result).toEqual(expected);
});
