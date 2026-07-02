import { caesarCipher } from "./caesarCipher.js";

test("shift a string", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wrapping a text after alphabet", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("case-sensitive shifting", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation shifting", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("big number of shifts", () => {
  expect(caesarCipher("Testing", 15)).toBe("Ithixcv");
});

test("big number of shifts with punctuations, special symbols", () => {
  expect(caesarCipher(`I'm hope, this $s working`, 15)).toBe(
    `X'b wdet, iwxh $h ldgzxcv`,
  );
});
