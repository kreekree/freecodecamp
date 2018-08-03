/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

 */
function myReplace(str, before, after) {
    //convert string to an array of words
    var myregex = /\w+/g;
    var arrayOfWords = str.match(myregex);
    // console.log(arrayOfWords);
    var afterArr = [];

   // function to change the second arr strings first letter to uppercase
    function convertCase(arg) {
       for( let i = 0; i < arg.length; i++) {
          afterArr.push(arg[i]);
        }
        
        afterArr.splice(0, 1, afterArr[0].toUpperCase());

        // Convert the case fixed array back to a string
        return afterArr.reduce(function(acc, letter, index) {
            return acc + letter;
        });

    }
  

   // Loop through the array of words and look for a word that matches the second argument
        arrayOfWords.filter(function(word, index) {
            if (word === before) {
                if (!(before[0] === before[0].toUpperCase())) {
                arrayOfWords.splice(index, 1, after);
              } else {
                  //convert first letter case to upper
                  var strToUpper = convertCase(after);
                  arrayOfWords.splice(index, 1, strToUpper);
              }
            }
        });
      //  console.log(arrayOfWords);

     return arrayOfWords.reduce(function(acc, word, index) {
        return acc + " " + word;
    });
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  console.log(myReplace("Let us go to the store", "store", "mall"));
  console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
  console.log(myReplace("His name is Tom", "Tom", "john"));
  console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));

