import capitalize from "./capitalize";

test('capitalizes the first letter', () => {
  expect(capitalize('hello')).toMatch('Hello');
})
