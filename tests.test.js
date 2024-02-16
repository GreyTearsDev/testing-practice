const capitalize = require("./src/capitalize");
const reverseString = require("./src/reverse");

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toMatch('Hello');
})

test('reverse a string', () => {
  expect(reverseString('hello')).toMatch('olleh');
})
