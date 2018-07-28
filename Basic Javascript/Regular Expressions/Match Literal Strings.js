let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr));

let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr));
// Return false

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);


