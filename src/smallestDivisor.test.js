import { smallestDivisorRecursive, smallestDivisorIterative } from './smallestDivisor';

describe('Recursive vesrsion', () => {
  test('Should return smallest divisor', () => {
    expect(smallestDivisorRecursive(15)).toBe(3);
    expect(smallestDivisorRecursive(2)).toBe(2);
  });

  test('Corner cases', () => {
    expect(smallestDivisorRecursive(0)).toEqual(NaN);
    expect(smallestDivisorRecursive(1)).toBe(1);
    expect(smallestDivisorRecursive(-5)).toEqual(NaN);
  });
});

describe('Iterative vesrsion', () => {
  test('Should return smallest divisor', () => {
    expect(smallestDivisorIterative(15)).toBe(3);
    expect(smallestDivisorIterative(2)).toBe(2);
  });

  test('Corner cases', () => {
    expect(smallestDivisorIterative(0)).toEqual(NaN);
    expect(smallestDivisorIterative(1)).toBe(1);
    expect(smallestDivisorRecursive(-5)).toEqual(NaN);
  });
});
