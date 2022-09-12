const getNthElement = (index, array) => {
  if (index >= array.length) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  // const array2 = array.concat([element]);
  const array2 = [...array, element];
  return array2;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(
    string =>
      string
        .split("") // ["c","a","t"]
        .reverse() // ["t","a","c"]
        .toString() // t,a,c
        .replace(/,/g, "") // tac
  );
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // const array2 = array.splice(index, 1);
  // return array2;
  return array.filter(i => array.indexOf(i) !== index);
};

const elementsStartingWithAVowel = strings => {
  const vowels = ["a", "e", "i", "o", "u"];

  return strings.filter(string => {
    const firstLetter = string[0].toLowerCase();

    return vowels.includes(firstLetter);
  });
};

const removeSpaces = string => {
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, val) => {
    return acc + val;
  }, 0);
};

const sortByLastLetter = strings => {
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
