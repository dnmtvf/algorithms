const twoSum = (nums, target) => {
  return nums.reduce((acc, item, index) => {
    const nextIndex = index + 1;
    const secondIndex = nums.slice(nextIndex).findIndex(elem => elem + item === target);
    return secondIndex !== -1 ? acc.concat(index, secondIndex + nextIndex) : acc;
  }, []);
};

export default twoSum;
