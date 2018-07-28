/* let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;

console.log(multipleA.test(A4)); //Returns true
console.log(multipleA.test(A2)); //Returns false

console.log(A4.match(multipleA)); */

let ohStr = "Ohhhhhh no";
let ohRegex = /Oh{3,6}\s/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);
console.log(ohStr.match(ohRegex));

