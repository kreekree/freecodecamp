// let longHand = /[A-za-z0-9_]+/;
// let shortHand = /\w+/; //shorthand character class
// let numbers = "42";
// let varNames = "important_var";

// console.log(longHand.test(numbers)); // Returns true
// console.log(shortHand.test(numbers)); // Returns true
// console.log(longHand.test(varNames)); // Returns true
// console.log(longHand.test(varNames)); // Returns true

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);


