import { capitalize } from "./capitalize.js";

test("capitalize the word", () => {
  expect(capitalize("abc")).toBe("Abc");
});

test("capitalize another word", () => {
  expect(capitalize("something")).toBe("Something");
});

test("capitalize with two words", () => {
  expect(capitalize("hello World")).toBe("Hello World");
});
