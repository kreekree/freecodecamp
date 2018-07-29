var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add(arr, bookName) {
  let newList = [...arr];
  newList.push(bookName);
  return newList;
  
  // Add your code above this line
}

console.log(add(bookList, "New Book Name"));

console.log(bookList);
