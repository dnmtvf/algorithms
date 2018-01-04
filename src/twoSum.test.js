import twoSum from './twoSum';

test('Should return array with 2 indicies', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test('Should return array with 2 indicies', () => {
  const nums = [1, 9, 3, 15];
  const target = 18;
  expect(twoSum(nums, target)).toEqual([2, 3]);
});

test('Should return array with 2 indicies', () => {
  const nums = [3, 11, 7, 1];
  const target = 4;
  expect(twoSum(nums, target)).toEqual([0, 3]);
});
