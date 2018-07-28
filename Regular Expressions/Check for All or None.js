let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;

console.log(rainbowRegex.test(american)); // Returns true
console.log(rainbowRegex.test(british)); // Returns true

