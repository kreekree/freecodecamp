// Example

var numArray = [];

for (var i = 0; i < 3; i++) {
  numArray.push(i);
}

console.log(numArray);
// returns [0, 1, 2,]
console.log(i);
// returns 3

//Similar to above

var numArray = [];
var i;

for (i = 0; i < 3; i++){
  numArray.push(i);
}

console.log(numArray);
// returns [0, 1, 2]
console.log(i);


//Example

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());



//////

'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    }
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
//returns "i is not defined"


-------------------------->

function checkScope() {
"use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
}
