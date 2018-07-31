/* var numbers = [10, 50, 8, 220, 110, 11];

var bool = numbers.some(function(currentValue) {
    return currentValue < 10;
});

// Returns true
console.log(bool); */




/* Use the some method inside the checkPositive function to check if 
any element in arr is positive. The function should return a Boolean 
value. */

function checkPositive(arr) {
    return arr.some(function(currentValue) {
        return currentValue > 0;
    });

}

console.log(checkPositive([1, 2, 3, -4, 5]));