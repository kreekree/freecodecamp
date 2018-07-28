let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

let twinkleStar = "Twinkle, twinkles, little star";
let starRegex = /change/; // Change this line
let result = twinklesStar; // Change this line