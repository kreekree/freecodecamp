/* Write the incrementer function so it takes an 
argument, and then increases the value by one. */

// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (fixedValue) {
    return fixedValue + 1;
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(newValue);
console.log(fixedValue); // Should print 4

