// Example

"use strict"
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign const
s[2] = 45; // works jusut as it would with an array declared
// with var or let
console.log(s); // returns [5, 6, 45]
