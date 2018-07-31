// Use the sort method in the nonMutatingSort function to sort the 
// elements of an array in ascending order. 
// The function should return a new array, and not mutate the 
// globalArray variable.




var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  
  return arr.concat([]).sort(function(a,b) {
    return a > b;
  });
  
  // Add your code above this line
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);