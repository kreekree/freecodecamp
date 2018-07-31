// //Un-curreid function
// function unCurried(x, y) {
//     return x + y;
// }

// //Curried function
// function curried(x) {
//     return function(y) {
//         return x + y;
//     }
// }

// //console.log(curried(1)(2))

// // Call a curried function in parts:
// var funcForY = curried(1);
// console.log(funcForY(2));

// //Impartial function
// function impartial(x, y, z) {
//     return x + y + z;
// }
// var partialFn = impartial.bind(this, 1, 2);

// console.log(partialFn(10)); // Returns 13


/* Fill in the body of the add function so it uses currying to 
add parameters x, y, and z. */

function add(x) {
    // Add your code below this line
    return function(y) {
        return function(z) {
            return x + y + z;
        };
    }

    // Add your code above this line
  }
  console.log(add(10)(20)(30));