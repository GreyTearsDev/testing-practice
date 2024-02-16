const capitalize = require("./src/capitalize");

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toMatch('Hello');
})

test('reverse a string', () => {
  expect(reverseString('hello').toMatch('olleh'));
})
