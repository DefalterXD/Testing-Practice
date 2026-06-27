import { analyzeArray } from "./analyzeArray.js";

test("analyze an array an gives an obj with info", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze a short array with info", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("analyze a single element array with info", () => {
  expect(analyzeArray([2])).toEqual({ average: 2, min: 2, max: 2, length: 1 });
});
