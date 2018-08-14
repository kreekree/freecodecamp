/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {

    var romanNumerals  = [{1: 'I'}, {2: 'II'}, {3: 'III'}, {4: 'IV'}, {5: 'V'}, {6: 'VI'}, {7: 'VII'}, {8: 'VIII'}, {9: 'IX'}, {10: 'X'}, {40: 'XL'}, {50: 'L'}, {90: 'XC'}, {100: 'C'}, {400: 'CD'}, {500: 'D'}, {900: 'CM'}, {1000: 'M'}]
    var romFactors = [];

    var romNum = function(arr, value, rarr) {
        var rn;
        arr.forEach(function(item, index, array) {
            if (item[value]) {
                rn = (item[value]);
            }
        });

        rarr.push(rn);
        return rn;
    };


    // Function to find the largest factor
    var findMaxNum = function(arr, number) {
        var myArr = [];
       // var array = [];
        romanNumerals.forEach(function(item, index, arr) {
            if (number >= (Object.keys(arr[index])[0])) {
            myArr.push(Object.keys(arr[index])[0]);
          //  array.push((arr[index][Object.keys(arr[index])[0]]));
            }
        });

        var max = myArr[myArr.length - 1];
       // console.log((array[array.length - 1]));
        
        return parseInt(max);
    }

    // Function thaty add the factor continuously to the sum until sum is greater than or equla to NUM
    var addMax = function(sum, max) {
        while ((sum + max ) <= num) {
            sum = sum + max;
            findMaxNum(romanNumerals, max);
            romNum(romanNumerals, max, romFactors);
        }
        return sum;
    }



    var myMax = findMaxNum(romanNumerals, num);
    romNum(romanNumerals, myMax, romFactors);
    var sum = myMax;
    var m = addMax(sum, myMax);


    while (m !== num) {
       // console.log(test);
        tMax = findMaxNum(romanNumerals, (num - m));
      //  console.log(test);
        m = addMax(m,tMax);
      //  console.log(test);
    }
    
    
    
   var rf = romFactors.join("");
    return rf;
}
   

console.log(convertToRoman(36));
console.log(convertToRoman(2)); // should return "II".
console.log(convertToRoman(3)); // should return "III".
console.log(convertToRoman(4)); // should return "IV".
console.log(convertToRoman(5)); // should return "V".
console.log(convertToRoman(9)); // should return "IX".
console.log(convertToRoman(12)); // should return "XII".
console.log(convertToRoman(16)); // should return "XVI".
console.log(convertToRoman(29)); // should return "XXIX".
console.log(convertToRoman(44)); // should return "XLIV".
console.log(convertToRoman(45)); // should return "XLV"
console.log(convertToRoman(68)); // should return "LXVIII"
console.log(convertToRoman(83)); // should return "LXXXIII"
console.log(convertToRoman(97)); // should return "XCVII"
console.log(convertToRoman(99)); // should return "XCIX"
console.log(convertToRoman(400)); // should return "CD"
console.log(convertToRoman(500)); // should return "D"
console.log(convertToRoman(501)); // should return "DI"
console.log(convertToRoman(649)); // should return "DCXLIX"
console.log(convertToRoman(798)); // should return "DCCXCVIII"
console.log(convertToRoman(891)); // should return "DCCCXCI"
console.log(convertToRoman(1000)); // should return "M"
console.log(convertToRoman(1004)); // should return "MIV"
console.log(convertToRoman(1006)); // should return "MVI"
console.log(convertToRoman(1023)); // should return "MXXIII"
console.log(convertToRoman(2014)); // should return "MMXIV"
console.log(convertToRoman(3999)); // should return "MMMCMXCIX"



