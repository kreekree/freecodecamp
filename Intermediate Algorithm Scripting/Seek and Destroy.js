/* You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.

Note
You have to use the arguments object. */


function destroyer(arr) {
    // Remove all the values
    
    
    const myArray = [...arguments[0]];
    var constArray = [...myArray];

    var newArray = [...arguments];
    newArray.shift();

        newArray.forEach(function(item) {

            myArray.forEach(function(currentValue, index) {
                
                if (item === currentValue) {
                    constArray.splice(index, 1, "");
                }
            });
        });

    var newArr = constArray.filter(function(currentValue) {
        return currentValue !== "";
    });
    
    return newArr;

  }
  
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

