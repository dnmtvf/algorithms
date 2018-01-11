const smallestDivisor = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  const iter = (counter) => {
    if (counter === num) {
      return num;
    }

    return num % counter === 0 ? counter : iter(counter + 1);
  };

  return iter(2);
};

export default smallestDivisor;
