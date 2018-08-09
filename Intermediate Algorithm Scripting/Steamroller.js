// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
    // I'm a steamroller, baby
    var myArray = [];
    arr.forEach(function(item, index) {

        function arrayLevels(item, arr) {
            if (item.length === undefined) {
                    arr.push(item);
                }
            else if (item.length === 1) {
                var myNewArr = [item];
    
                while (Array.isArray(myNewArr)) {
                    myNewArr = myNewArr[0];
                }
                arr.push(myNewArr);
            }
        }

        arrayLevels(item, myArray);

        if (item.length > 1) {

            item.forEach(function(currentValue, index) {
                arrayLevels(currentValue, myArray);
            });
        }
        
    });
    
    return myArray;

  }


 console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].
 console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4].
 console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
 console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4]