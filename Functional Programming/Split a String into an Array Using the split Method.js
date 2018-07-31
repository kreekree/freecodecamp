// var str = "Hello World";
// var bySpace = str.split(/\s/);

// console.log(bySpace);

// var otherString = "How9are7you2today";
// var byDigits = otherString.split(/\d/);

// console.log(byDigits);

/* Use the split method inside the splitify function to split str 
into an array of words. The function should return the array. 
Note that the words are not always separated by spaces, and the array 
should not contain punctuation. */

function splitify(str) {
    // Add your code below this line
    var newString = str.split(/\W/);
    // Add your code above this line
    return newString;
  }
  
  console.log(splitify("Hello World,I-am code"));



