const capitalize = require('./src/capitalize');
const reverseString = require('./src/reverse');
const calculator = require('./src/calculator')
const caesar = require('./src/caesar');
const analyzeArray = require('./src/analyse');

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

test('shifts each character by the shift factor', () => {
  expect(caesar('hello', 3)).toMatch('KHOOR');
  expect(caesar('incapaz', 7)).toMatch('PUJHWHG');
})

test('object has "average", "min", "max", and "legth" properties', () => {
  const object = analyzeArray([1,8,3,4,2,6])

  expect(object.average).toBeDefined();
  expect(object.min).toBeDefined();
  expect(object.max).toBeDefined();
  expect(object.lenght).toBeDefined();
})
