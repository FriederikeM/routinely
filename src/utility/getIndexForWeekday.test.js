import getIndexForWeekday from "./getIndexForWeekday";

test("gives back an index ranging from 0 - 6 based on the day of the week Monday - Sunday", () => {
  // GIVEN I have a string containing the name of a weekday
  const weekday = "Monday";
  // WHEN I call the function getIndexForWeekday with that string as an argument
  const result = getIndexForWeekday(weekday);
  // THEN I should get back the corresponding index
  const expected = 0;

  expect(result).toBe(expected);
});

test("gives back undefined if it gets called with anything that isn't a string representing a weekday", () => {
  // GIVEN I have a string containing the name of a weekday
  const weekday = "Test";
  // WHEN I call the function getIndexForWeekday with that string as an argument
  const result = getIndexForWeekday(weekday);
  // THEN I should get back the corresponding index
  const expected = undefined;

  expect(result).toBe(expected);
});
