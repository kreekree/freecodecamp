// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var myregex = /[a-zA-Z][a-z]+/g;
  var wordArray = str.match(myregex);
  
  var lowerWordArrray = wordArray.map(function(word, index) {
    return word.toLowerCase();
  });

  var spinalArray = lowerWordArrray.reduce(function(acc, word) {
    return acc + "-" + word;
  });

  return spinalArray;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));