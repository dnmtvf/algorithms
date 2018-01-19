import wordToUpperCase from './wordToUpperCase';

test('Should return text with first character of each word converted to upper case', () => {
  expect(wordToUpperCase('Test this function')).toBe('Test This Function');
  expect(wordToUpperCase('onlyonelognword')).toBe('Onlyonelognword');
  expect(wordToUpperCase('one more test')).toBe('One More Test');
  expect(wordToUpperCase('  hello,   world!')).toBe('  Hello,   World!');
  expect(wordToUpperCase(' many different words inside sentence')).toBe(' Many Different Words Inside Sentence');
});
