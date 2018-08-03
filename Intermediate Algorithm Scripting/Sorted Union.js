/* Write a function that takes two or more arrays and returns a new array of unique values in 
the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not 
be sorted in numerical order. */

function uniteUnique(arr) {

    // Create a new array with all of the input array items 
    var myArray = [];

    for (let i = 0; i < arguments.length; i++) {
       arguments[i].forEach(function(arrItem) {
            myArray.push(arrItem);
       });
    }

    // Check the each item in the array to see if it is already included
    var unArr = [];

    myArray.forEach(function(item) {
        var bool = unArr.some(function(unValue, index) {
            return item === unValue;
        });
        if (!bool) {
            unArr.push(item);
        }
    });

    return unArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
  console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
  console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].

