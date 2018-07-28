/**Refactor (rewrite) the code so the global array bookList 
 * is not changed inside either function. The add function should 
 * add the given bookName to the end of an array. The remove function 
 * should remove the given bookName from an array. Both functions should 
 * return an array, and any new parameters should 
 * be added before the bookName one. */

 // the global variable

 var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
 "Philosophia Naturalis Principia Mathematics", "DIsquisitiones Arithmeticae"];

 /* This function should add a book to the list and return the list*/
 // New parameters should come before the bookName one

 // Add your code below this line
 function add (bookName) {
     return bookList.push(bookName);
// Add your code above this line
 }

 /* This function should remove a book from the list and return the list */
 // New parameters should come before the bookName one

// Add your code below this line
function remove (bookName) {
    if (bookList.indexOf(bookName) >= 0) {
        return bookList.splice(0, 1, bookName);
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);








