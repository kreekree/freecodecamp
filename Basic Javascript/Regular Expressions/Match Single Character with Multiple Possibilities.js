let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /[aiu]/;
console.log(bigStr.match(bgRegex)); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bagStr.match(bgRegex); // Retrusn ["bug"]
bogStr.match(bgRegex); // Returns null

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it. ";

let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex);
console.log(result) ;// Change this line



