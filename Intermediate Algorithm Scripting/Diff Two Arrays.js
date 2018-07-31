/* Compare two arrays and return a new array with any items only found in one of 
the two given arrays, but not both. In other words, return the symmetric difference 
of the two arrays. */

// You can return the array with its elements in any order.


function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.

    arr1.forEach(function(item) {
        var bool = arr2.some(function(currentValue) {
            return (item === currentValue);
        });
        if (!bool) {
            newArr.push(item);
        }
    });

    arr2.forEach(function(item) {
        var bool = arr1.some(function(currentValue) {
            return (item === currentValue);
        });
        if (!bool) {
            newArr.push(item);
        }
    });

   
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

