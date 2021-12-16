const oddOccurrencesInArray = require('./oddOccurrencesInArray');

test('array [9, 3, 9, 3, 9, 7, 9] has one unpaired element 7', () => {
  expect(oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9])).toBe(7);
});

test('array [9, 3, 9, 3, 9, 7, 9] has no one unpaired element', () => {
  expect(oddOccurrencesInArray([9, 3, 9, 3, 9, 7, 9, 7])).toBe(-1);
});
