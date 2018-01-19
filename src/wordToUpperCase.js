const wordToUpperCase = (str) => {
  let strUpperCase = '';
  for (let i = 0; i < str.length; i += 1) {
    const isUpperCase = str[i] !== ' ' && (str[i - 1] === ' ' || i === 0);
    strUpperCase += isUpperCase ? str[i].toUpperCase() : str[i];
  }

  return strUpperCase;
};

export default wordToUpperCase;
