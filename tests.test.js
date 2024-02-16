const capitalize = require("./src/capitalize");
const reverseString = require("./src/reverse");

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toMatch('Hello');
})

test('reverse a string', () => {
  expect(reverseString('hello')).toMatch('olleh');
})

test('correctly performs a calculation', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.multiply(2, 2)).toBe(4);
})
