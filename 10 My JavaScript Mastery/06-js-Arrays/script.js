const output = document.getElementById('output');
const log = (section, ...args) => {
  // Log to console
  console.log(section, ...args);
  // Show on browser
  const div = document.createElement('div');
  div.className = 'section';
  div.innerHTML = `<h2>${section}</h2><p>${args.join(' ')}</p>`;
  output.appendChild(div);
};

// JavaScript Arrays Example
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
log('Initial Fruits:', fruits);

// Adding an element to the end of the array
fruits.push('Elderberry');
log('After push:', fruits);

// Removing the first element of the array
fruits.shift();
log('After shift:', fruits);

// Finding the index of 'Cherry'
const cherryIndex = fruits.indexOf('Cherry');
// Logging the results
log('Fruits:', fruits);
log('Index of Cherry:', cherryIndex);

// Checking if 'Banana' is in the array
const hasBanana = fruits.includes('Banana');
log('Has Banana:', hasBanana);

// Reversing the array
fruits.reverse();
log('Reversed Fruits:', fruits);

// Sorting the array
fruits.sort();
log('Sorted Fruits:', fruits);

// Joining the array into a string
const fruitsString = fruits.join(', ');
log('Fruits String:', fruitsString);

// Slicing the first two elements
const slicedFruits = fruits.slice(0, 2);
log('Sliced Fruits:', slicedFruits);

// Mapping the array to uppercase
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
log('Uppercase Fruits:', upperFruits);

// Filtering the array to get fruits that start with 'B'
const bFruits = fruits.filter(fruit => fruit.startsWith('B'));
log('Fruits starting with B:', bFruits);

// Reducing the array to a single string
const reducedFruits = fruits.reduce((acc, fruit) => acc + ' ' + fruit, '');
log('Reduced Fruits:', reducedFruits.trim());

// Finding the first fruit that starts with 'C'
const firstCFruit = fruits.find(fruit => fruit.startsWith('C'));
log('First fruit starting with C:', firstCFruit);

// Checking if all fruits are longer than 3 characters
const allLongerThanThree = fruits.every(fruit => fruit.length > 3);
log('All fruits longer than 3 characters:', allLongerThanThree);

// Checking if any fruit starts with 'A'
const anyStartsWithA = fruits.some(fruit => fruit.startsWith('A'));
log('Any fruit starts with A:', anyStartsWithA);

// Flattening a nested array
const nestedFruits = [['Apple', 'Banana'], ['Cherry', 'Date']];
const flattenedFruits = nestedFruits.flat();
log('Flattened Fruits:', flattenedFruits);

// Creating a new array with the first two elements
const newFruits = fruits.slice(0, 2);
log('New Fruits:', newFruits);

// Finding the last index of 'Banana'
const lastBananaIndex = fruits.lastIndexOf('Banana');
log('Last index of Banana:', lastBananaIndex);

// Checking if the array is empty
const isEmpty = fruits.length === 0;
log('Is the fruits array empty?', isEmpty);

// Converting the array to a string with a custom separator
const customSeparator = fruits.join(' | ');
log('Fruits with custom separator:', customSeparator);

// Creating a copy of the array
const fruitsCopy = [...fruits];
log('Copy of Fruits:', fruitsCopy);

// Finding the maximum length fruit
const maxLengthFruit = fruits.reduce((max, fruit) => fruit.length > max.length ? fruit : max, '');
log('Fruit with maximum length:', maxLengthFruit);

// Finding the minimum length fruit
const minLengthFruit = fruits.reduce((min, fruit) => fruit.length < min.length ? fruit : min, fruits[0]);
log('Fruit with minimum length:', minLengthFruit);

// Checking if the array contains a specific fruit
const containsFruit = (fruit) => fruits.includes(fruit);
log('Contains Cherry:', containsFruit('Cherry'));
log('Contains Fig:', containsFruit('Fig'));

// Merging two arrays
const moreFruits = ['Fig', 'Grape'];
const mergedFruits = [...fruits, ...moreFruits];
log('Merged Fruits:', mergedFruits);

// Finding the first index of 'Date'
const firstDateIndex = fruits.indexOf('Date');
log('First index of Date:', firstDateIndex);

// Removing duplicates from the array
const uniqueFruits = [...new Set(fruits)];
log('Unique Fruits:', uniqueFruits);

// Checking if the array is sorted
const isSorted = (arr) => arr.every((val, i, array) => !i || array[i - 1] <= val);
log('Is the fruits array sorted?', isSorted(fruits));

// Creating a new array with the lengths of each fruit
const fruitLengths = fruits.map(fruit => fruit.length);
log('Lengths of each fruit:', fruitLengths);

// Finding the longest fruit name
const longestFruit = fruits.reduce((longest, fruit) => fruit.length > longest.length ? fruit : longest, '');
log('Longest fruit name:', longestFruit);

// Finding the shortest fruit name
const shortestFruit = fruits.reduce((shortest, fruit) => fruit.length < shortest.length ? fruit : shortest, fruits[0]);
log('Shortest fruit name:', shortestFruit);

// Checking if the array contains a specific substring
const containsSubstring = (substring) => fruits.some(fruit => fruit.includes(substring));
log('Contains "an":', containsSubstring('an'));
log('Contains "kiwi":', containsSubstring('kiwi'));

// Creating a new array with the first letter of each fruit
const firstLetters = fruits.map(fruit => fruit.charAt(0));
log('First letters of each fruit:', firstLetters);

// Finding the first fruit that contains 'e'
const firstWithE = fruits.find(fruit => fruit.includes('e'));
log('First fruit that contains "e":', firstWithE);

// Checking if the array is a valid array
const isValidArray = Array.isArray(fruits);
log('Is fruits a valid array?', isValidArray);

// Creating a new array with fruits that have more than 5 characters
const longFruits = fruits.filter(fruit => fruit.length > 5);
log('Fruits with more than 5 characters:', longFruits);

// Finding the index of the first fruit that starts with 'D'
const firstDIndex = fruits.findIndex(fruit => fruit.startsWith('D'));
log('Index of first fruit starting with D:', firstDIndex);

// Creating a new array with fruits in reverse order
const reversedFruits = [...fruits].reverse();
log('Reversed Fruits:', reversedFruits);

// Checking if the array is a palindrome
const isPalindrome = (arr) => {
  const reversed = [...arr].reverse();
  return arr.every((val, index) => val === reversed[index]);
};
log('Is the fruits array a palindrome?', isPalindrome(fruits));

// Creating a new array with fruits that end with 'e'
const fruitsEndingWithE = fruits.filter(fruit => fruit.endsWith('e'));
log('Fruits ending with "e":', fruitsEndingWithE);

// Finding the last fruit that starts with 'A'
const lastAIndex = fruits.lastIndexOf(fruits.find(fruit => fruit.startsWith('A')));
log('Last fruit starting with A:', fruits[lastAIndex]);

// Creating a new array with fruits that have an even number of characters
const evenLengthFruits = fruits.filter(fruit => fruit.length % 2 === 0);
log('Fruits with even number of characters:', evenLengthFruits);

// Finding the first fruit that is longer than 6 characters
const firstLongerThanSix = fruits.find(fruit => fruit.length > 6);
log('First fruit longer than 6 characters:', firstLongerThanSix);

// Creating a new array with fruits that have a vowel in them
const fruitsWithVowel = fruits.filter(fruit => /[aeiou]/i.test(fruit));
log('Fruits with a vowel:', fruitsWithVowel);

// Finding the index of the last fruit that contains 'a'
const lastAIndexInFruits = fruits.lastIndexOf(fruits.find(fruit => fruit.includes('a')));
log('Last index of fruit containing "a":', lastAIndexInFruits);

// Creating a new array with fruits that have more than 4 characters
const moreThanFourCharsFruits = fruits.filter(fruit => fruit.length > 4);
log('Fruits with more than 4 characters:', moreThanFourCharsFruits);

// Finding the first fruit that starts with a vowel
const firstVowelFruit = fruits.find(fruit => /^[aeiou]/i.test(fruit));
log('First fruit starting with a vowel:', firstVowelFruit);

// Creating a new array with fruits that have an odd number of characters
const oddLengthFruits = fruits.filter(fruit => fruit.length % 2 !== 0);
log('Fruits with odd number of characters:', oddLengthFruits);

// Finding the last fruit that contains 'e'
const lastWithE = fruits.reverse().find(fruit => fruit.includes('e'));
log('Last fruit that contains "e":', lastWithE);

// Creating a new array with fruits that have a consonant in them
const fruitsWithConsonant = fruits.filter(fruit => /[bcdfghjklmnpqrstvwxyz]/i.test(fruit));
log('Fruits with a consonant:', fruitsWithConsonant);

// Finding the index of the first fruit that contains 'e'
const firstEIndex = fruits.findIndex(fruit => fruit.includes('e'));
log('Index of first fruit containing "e":', firstEIndex);

// Creating a new array with fruits that have an even number of characters
const evenCharsFruits = fruits.filter(fruit => fruit.length % 2 === 0);
log('Fruits with even number of characters:', evenCharsFruits);

// Finding the first fruit that starts with 'B'
const firstBIndex = fruits.findIndex(fruit => fruit.startsWith('B'));
log('Index of first fruit starting with B:', firstBIndex);

// Creating a new array with fruits that have a length greater than 3
const greaterThanThreeFruits = fruits.filter(fruit => fruit.length > 3);
log('Fruits with length greater than 3:', greaterThanThreeFruits);

// Finding the last fruit that starts with 'C'
const lastCIndex = fruits.reverse().findIndex(fruit => fruit.startsWith('C'));
log('Last fruit starting with C:', fruits[fruits.length - 1 - lastCIndex]);

// Creating a new array with fruits that have a length less than 5
const lessThanFiveFruits = fruits.filter(fruit => fruit.length < 5);
log('Fruits with length less than 5:', lessThanFiveFruits);
