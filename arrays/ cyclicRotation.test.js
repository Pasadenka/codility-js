const cyclicRotation = require('./ cyclicRotation');

test('array [3, 8, 9, 7, 6] is shifted to [6, 3, 8, 9, 7] by 1 time', () => {
  expect(cyclicRotation([3, 8, 9, 7, 6], 1)).toEqual([6, 3, 8, 9, 7]);
});

test('array [3, 8, 9, 7, 6] is shifted to [6, 3, 8, 9, 7] by 3 time', () => {
  expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
});

test('array [1, 2, 3, 4] is shifted to [1, 2, 3, 4] by 4 time', () => {
  expect(cyclicRotation([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
});

test('array [1, 2, 3, 4] is shifted to [4, 1, 2, 3] by 5 time', () => {
  expect(cyclicRotation([1, 2, 3, 4], 5)).toEqual([4, 1, 2, 3]);
});
