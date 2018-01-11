export const smallestDivisorRecursive = (num) => {
  if (num < 1) {
    return NaN;
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

export const smallestDivisorIterative = (num) => {
  if (num < 1) {
    return NaN;
  }
  if (num === 1) {
    return 1;
  }

  let counter = 2;

  while (counter <= num && num % counter !== 0) {
    counter += 1;
  }

  return counter;
};

