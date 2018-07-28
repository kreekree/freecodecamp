let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g; // Change this line
let result = hello.replace(wsRegex,""); // Change this line


/* Write a regex and use the appropriate string methods to 
remove whitespace at the beginning and end of strings. */

console.log(wsRegex.test(hello));
console.log("Hello, World!");
console.log(result);
