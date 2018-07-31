// Use the sort method in the alphabeticalOrder function to sort the 
// elements of arr in alphabetical order.



function alphabeticalOrder(arr) {
    // Add your code below this line

    return arr.sort(function(a, b){
        return b < a;
    });
    
    
    // Add your code above this line
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));