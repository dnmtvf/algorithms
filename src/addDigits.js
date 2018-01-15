export const addEach = (num) => {
  const strOfDigits = String(num);
  let acc = 0;
  for (let i = 0; i < strOfDigits.length; i += 1) {
    acc += Number(strOfDigits[i]);
  }
  return acc;
};

const addDigits = (num) => {
  if (num < 10) {
    return num;
  }
  return addDigits(addEach(num));
};

export default addDigits;
