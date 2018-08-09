// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
    // I'm a steamroller, baby
    var myArray = [];
    arr.forEach(function(item, index) {
        
        if (item.length === undefined) {
               myArray.push(item);
           }
        else if (item.length === 1) {
            //console.log(item);
            var myNewArr = [item];

            while (Array.isArray(myNewArr)) {
                myNewArr = myNewArr[0];
            }
            myArray.push(myNewArr);
        } else {
            item.forEach(function(currentValue, index) {
                if (currentValue.length === 1) {
                    //console.log(item);
                    var myNewArr = [currentValue];
        
                    while (Array.isArray(myNewArr)) {
                        myNewArr = myNewArr[0];
                    }
                    myArray.push(myNewArr);
                } else if (currentValue.length === undefined) {
                       myArray.push(currentValue);
                   }
            });
        }

        
        
       // console.log(myArray);
    });

    return myArray;

  }


 console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].
 console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4].
 console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
 console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4]