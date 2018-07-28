let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
console.log(whiteSpace.match(nonSpaceRegex).length); // Returns 32