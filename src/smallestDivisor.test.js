import smallestDivisor from './smallestDivisor';

test('Should return smallest divisor', () => {
  expect(smallestDivisor(15)).toBe(3);
  expect(smallestDivisor(2)).toBe(2);
});

test('Corner cases', () => {
  expect(smallestDivisor(0)).toBe(0);
  expect(smallestDivisor(1)).toBe(1);
});
