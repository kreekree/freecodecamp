/* Find the smallest common multiple of the provided parameters that 
can be evenly divided by both, as well as by all sequential numbers 
in the range between these parameters.

The range will be an array of two numbers that will not necessarily 
be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of 
both 1 and 3 that is also evenly divisible by all numbers between 1 
and 3. 

The answer here would be 6. */
function smallestCommons(arr) {


    var arrayS = function(array) {

        array.sort(function(a, b) {
            return a - b;
        });

        var myArray = [];
        for (let i = array[0]; i <= array[1]; i++) {
            myArray.push(i);
        }
        return myArray;
    }

    var mainArray = arrayS(arr); // [1,2,3,4,5]
 //   console.log(mainArray);

    const indexStart = arr[1] + 1; // 6
   // console.log(indexStart);

    var x = true;
   
    for (let i = indexStart; x === true; i++) {
        var myArray = [];
        mainArray.forEach(function(number, index) {
            if (i % number === 0) {
             //   console.log(i, number);
                myArray.push(true);
            } else {
            //    console.log(i, number);
                myArray.push(false);
            }
        });
        
        var bool = myArray.every(function(item, value) {
            return item === true;
        });
       
      

        if (bool === true) {
           return i;
           x = false;
        }
    }
}

    



      console.log(smallestCommons([1, 5])); // should return 60.
      console.log(smallestCommons([5, 1])); // should return 60.
      console.log(smallestCommons([2, 10])); // should return 2520.
      console.log(smallestCommons([1, 13])); // should return 360360.
      console.log(smallestCommons([23, 18])); // should return 6056820.