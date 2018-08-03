/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
    //find first consonant or consonant cluster
    
    var myregex = /[^aeiou]+/;
    var regexVowel = /^[aeiou]/;
    var consArray = str.match(myregex);
    // console.log(consArray);
    var consArrayofletters = [];
 //   console.log(consArray);

    if (!regexVowel.test(str)) {

        for(let i = 0; i < consArray[0].length; i++) {
            consArrayofletters.push(consArray[0][i]);
        }

        var lettersArray = [];

        // Create an array containing the strings letters to modify the words
        for(let i = 0; i < str.length; i++) {
        lettersArray.push(str[i]);
        }
      //  console.log(consArrayofletters);
        // for each consonant, check the letters array and remove it if its there
        consArrayofletters.forEach(function(consonant) {
            for (let i = 0; i < consArray.length; i++){
                if (consonant === lettersArray[i]) {
                 //   console.log(consonant, lettersArray[i]);
                      lettersArray.splice(i, 1);
                      lettersArray.push(consonant);
                }
            }
        });

        lettersArray.push('ay');
        
        // 
        var pigStr = lettersArray.reduce(function(acc, letter){
            return acc + letter;
        });

       return pigStr;

    } else {
        return str + 'way';
    }

    return str;
  }
  
  console.log(translatePigLatin("consonant"));
  console.log(translatePigLatin("california"));
  console.log(translatePigLatin("paragraphs"));
  console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("algorithm"));
  console.log(translatePigLatin("eight"));
//Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.