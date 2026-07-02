import { reverseString } from "./reverseString.js";

test("reverse a string", () => {
  expect(reverseString("abd")).toBe("dba");
});

test("reverse a string with a capitalized word", () => {
  expect(reverseString("Apple")).toBe("elppA");
});

test("reverse a string with a number", () => {
  expect(reverseString("Ch2ck")).toBe("kc2hC");
});

test("reverse a string with a special symbols", () => {
  expect(reverseString("h3#@)")).toBe(")@#3h");
});
