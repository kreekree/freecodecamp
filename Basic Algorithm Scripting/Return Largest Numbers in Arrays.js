/*******************************
 * Return Largest Numbers in Arrays
 */

/* Return an array consisting of the largest number from 
each provided sub-array. For simplicity, the provided 
array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple 
for loop, and access each member with array syntax arr[i]. */

function largestOfFour(arr) {
  let maxArray = [];
    
  for (let i = 0; i < arr.length; i++) {
    maxArray.push(arr[i][0]);
    
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxArray[i]) {
        maxArray.splice(i, 1, arr[i][j]);
      }
    }
  } 
  return maxArray;
    
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

