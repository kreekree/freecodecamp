// let repeatStr = "regex regex";
// let repeatRegex = /(\w+)\s\1/;

// console.log(repeatRegex.test(repeatStr)); // Returns true
// console.log(repeatStr.match(repeatRegex)); // Returns ["regex reg */ex", "regex"]

// let repeatNum = "42 42 42 42";
// let reRegex = /(\d+)\s\1\s\1/; // Change this line
// let result = reRegex.test(repeatNum);
// let mresult = repeatNum.match(reRegex);

// console.log(mresult);


let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)\1\w+\1$/; // Change this line
let result = hello.replace(wsRegex, " "); // Change this line
console.log(hello);