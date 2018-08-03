/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

 */

function pairElement(str) {

    var pairArray = [];

    for(let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            pairArray.push(['A','T']);
        } else if (str[i] === 'T') {
            pairArray.push(['T','A']);
        } else if (str[i] === 'C') {
            pairArray.push(['C','G']);
        } else if (str[i] === 'G') {
            pairArray.push(['G','C']);
        }
    }

    return pairArray;
  }
  
  console.log(pairElement("GCG"));

  console.log(pairElement("ATCGA")); //  [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
  console.log(pairElement("TTGAG")); //  [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
  console.log(pairElement("CTCTA")); //  [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]