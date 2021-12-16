const binaryGap = require('./binaryGap');

test('number 9 contains a binary gap of length 2', () => {
  expect(binaryGap(9)).toBe(2);
});

test('number 529 contains a binary gap of length 4', () => {
  expect(binaryGap(529)).toBe(4);
});

test('number 20 contains a binary gap of length 1', () => {
  expect(binaryGap(20)).toBe(1);
});

test('number 32 contains a binary gap of length 0', () => {
  expect(binaryGap(32)).toBe(0);
});

test('number 1041 contains a binary gap of length 5', () => {
  expect(binaryGap(1041)).toBe(5);
});

test('number -1 is invalid and return 0', () => {
  expect(binaryGap(-1)).toBe(0);
});

test('string a is invalid and return 0', () => {
  expect(binaryGap('a')).toBe(0);
});
