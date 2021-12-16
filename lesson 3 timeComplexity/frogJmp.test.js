const frogJmp = require('./frogJmp');

test('position X is 10, position Y is 85 and distance is 30. Frogie need 3 steps.', () => {
  expect(frogJmp(10, 85, 30)).toBe(3);
});

test('position X is 10, position Y is 30 and distance is 30. Frogie need 1 steps.', () => {
    expect(frogJmp(10, 30, 30)).toBe(1);
});

test('position X is 10, position Y is 30 and distance is 5. Frogie need 4 steps.', () => {
    expect(frogJmp(10, 30, 5)).toBe(4);
});
