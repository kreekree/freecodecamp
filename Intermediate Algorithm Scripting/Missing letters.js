/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var indexArr = [];

    // Create and array of corresponding alphabet index values from the input string
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < alphabet.length; i++) {
            if (str[j] === alphabet[i]) {
                indexArr.push(i);
            }
        }
    }

    // subtract the current index value from the previous index value to find the missing index
    function missingIndex(arr) {
        var index = arr.filter(function(value, index) {
            return (arr[index + 1] - arr[index] > 1);
        });
        return index[0];
    }

        if (missingIndex(indexArr)) {
            var newStr = alphabet.charAt(missingIndex(indexArr) + 1);
            return newStr;
        } else {
            return undefined;
        }
    }

  console.log(fearNotLetter("abce")); // should return "d".
  console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
  console.log(fearNotLetter("stvwx")); // should return "u".
  console.log(fearNotLetter("bcdf")); // should return "e".
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.

