let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr

const myMatch = jennyStr.match(myRegex);
console.log(myMatch);


let quoteSample = "Blueberry 3.141592653s are delicious";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line


