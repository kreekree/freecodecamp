// Write your own Array.prototype.myMap(), which should 
// behave exactly like Array.prototype.map(). 
// You may use a for loop or the forEach method.

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    var newArray = [];
    // add your code below this line
    this.forEach(function(element) {
        newArray.push(callback(element));
    });

    // Add your code above this line
    return newArray;
};

var new_s = s.myMap(function(item) {
    return item * 2;
});

console.log(new_s);










