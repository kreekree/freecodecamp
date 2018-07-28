/* Fill in the code for the function incrementer so it 
returns the value of the global variable 
fixedValue increased by one. */

// the global variable
var fixedValue = 4;

function incrementer () {
    return fixedValue + 1;
}

var newValue = incrementer(); // Should be equal 5
console.log(newValue);
console.log(fixedValue); // Should print 4

