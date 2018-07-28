// // Splice removes any number of consecutive elements
// // from anywhere in an array

// let  arrayMy = ['today', 'was', 'not' , 'so', 'great'];

// let newArrayMy = arrayMy.splice(2, 2);

// /* remove 2 elements beginning with the 3rd element

// array now equals ['today', 'was', 'great'] */

// console.log(arrayMy);

// console.log(newArrayMy);

// let array = ['I', 'am', 'feeling', 'really', 'happy'];

// let newArray = array.splice(3, 2);
// console.log(newArray);

// // newArray equals ['really', 'happy']

// function colorChange(arr, index, newColor) {
//     arr.splice(index, 1, newColor);
//     return arr;
// }

// let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

// colorScheme = colorChange(colorScheme, 2, '#332327');

// We have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

// function htmlColorNames(arr) {
//     // change code below this line
//     arr.splice(0, 1, 'DarkSalmon');
//     arr.splice(1, 1, 'BlanchedAlmond');
//     // change code above this line
//     return arr;
//   } 
   
//   // do not change code below this line
//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));


/*****************************************
 * Basic Data Structures: Copy Array Items Using slice()
 */

//  let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

//  let todaysWeather = weatherConditions.slice(1, 3);

//  console.log(weatherConditions);
//  console.log(todaysWeather);

 // todaysWeather equlas ['snow', 'sleet'];
 // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']


// let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];

// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray



// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // change code below this line
//       let myArr = [...arr];
//       newArr.push(myArr);
//       // change code above this line
//       num--;
//     }
//     return newArr;
//   }
  
  // change code here to test different cases:
//   console.log(copyMachine([true, false, true], 2));

  /******************************************
   * Combine Arrays with the Spread Operator
   */

//   let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
  
//   let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
  // thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary' , 'parsely'
  // 'thyme', 'coriander']

//   function filteredArray(arr, elem) {
//     let newArr = [];
//     // change code below this line
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i].indexOf(elem) >= 0) {
//             console.log("ok");
//         } else {
//             newArr.push([...arr[i]]);
//             break;
//         }
//       }
//     }
//     // change code above this line
//     return newArr;
//   }
  
//   // change code here to test different cases:
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


/*********************************************
 * Create complex multi-dimensional arrays
 */

//  let nestedArray = [ // 1
//     ['deep'], // 2
//     [
//         ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
//     ],
//     [
//         [
//             ['deepestest'], ['deepest'] // 2 arrays nested 4 levels deep
//         ],
//         [
//             [
//                 ['deepest-est?'] // an array nested 5 levels deep
//             ]
//         ]
//     ]
//  ];

//  console.log(nestedArray[2][1][0][0][0]);
//  nestedArray[2][1][0][0][0] = 'deeper still';

//  console.log(nestedArray[2][1][0][0][0]);


//  let myNestedArray = [
//     // change code below this line
//     ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//     ['loop', 'shift', 6, 7, 1000, 'method'],
//     ['concat', false, true, 'spread', 'array'],
//     ['mutate', 1327.98, 'splice', 'slice', 'push'],
//     ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
//     [
//     [
//         ['deep'],[true],[5]
//     ],
//         [
//             ['deeper'],[false],[2]
//         ],
//         [
//             [
//                 ['deepest'], [true], [8]
//             ]
//         ]
//     ]
//     // change code above this line
//   ];

// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function countOnline(obj) {
//   // change code below this line
//   let i = 0;
//   for (let user in obj) {
    

//     if (obj[user].online) {
//       i++;
//     }
//   };

//   return i;
//   // change code above this line
// }

// console.log(countOnline(users));

/*****************************************
 * Modify an Array Stored in an Object
 */

// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
//   let myArray = userObj.data.friends;
//   myArray.push(friend);
//   return myArray;
// }

// console.log(addFriend(user, 'Pete'));

// function reverseString(str) {
//   let myArray = [];
//   let newString = "";
  
//   for (let i = 0; i < str.length; i++) {
//     myArray.unshift(str[i]);
//   }

//   for (let j = 0; j < myArray.length; j++) {
//     newString = newString + myArray[j];
//   }


//   return newString;
// }

// console.log(reverseString("hello"));

/**************************************
 * Factorialize a Number
 */

function factorialize(num) {
  let total = num;

  if (num !== 0) {
    for (let i = num; num > 1; num--) {
    total = total * (num - 1);
    }
  } else {
    return 1;
  }
  return total;
}

console.log(factorialize(0));



