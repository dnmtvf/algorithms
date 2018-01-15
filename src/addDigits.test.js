import addDigits from './addDigits';
import { addEach } from './addDigits';

test('Should add all given digits', () => {
  expect(addEach(10)).toBe(1);
  // expect(2 + 2).toBe(4);
  // expect(addDigits(11111)).toBe(5);
  // expect(addDigits(2894784)).toBe(6);
});

test('Should add given digits until sum has become one digit', () => {
  expect(addDigits(10)).toBe(1);
  expect(addDigits(11111)).toBe(5);
  expect(addDigits(2894784)).toBe(6);
});
