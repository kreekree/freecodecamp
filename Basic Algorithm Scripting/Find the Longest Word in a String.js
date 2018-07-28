function findLongestWordLength(str) {
    let lengthArray = [];
    let numMax = 0;
    let myRegex = /\w+/ig;
    let myArray = str.match(myRegex);
    
    for (let i = 0; i < myArray.length; i++) {
        lengthArray.push(myArray[i].length);
        console.log(lengthArray);
    }

    for (let j = 0; j < lengthArray.length; j++) {
        if (lengthArray[j] > numMax) {
            numMax = lengthArray[j];
        }
    }
    return numMax;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));