import { calculator } from "./calculator.js";

test("add two numbers", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(4, 1)).toBe(3);
});

test("divide two numbers", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test("divide by zero", () => {
  expect(calculator.divide(8, 0)).toBe(Infinity);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("multiply by zero", () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});
