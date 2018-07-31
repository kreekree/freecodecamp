/* We'll pass you an array of two numbers. Return the sum of those two 
numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
Write your own code. */



function sumAll(arr) {

    // Create a new array with all numbers
    arr.sort(function(a, b) {
        return a - b;
    });
    
    var arrayLength = (arr[1] - arr[0]) + 1;
    console.log(arrayLength);

    var myArray = [];
    myArray.push(arr[0]);

    for (let i = 0; i < arrayLength - 1; i++) {
        myArray.push(myArray[i] + 1);
        console.log(myArray);
    }

    //Calculate the sum of all the numbers

    var sumOrder = myArray.reduce(function(acc, currentValue) {
        return acc + currentValue;
    });

    return sumOrder;

    
  }
  
  console.log(sumAll([1, 4]));