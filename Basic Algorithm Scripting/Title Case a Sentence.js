


function titleCase(str) {
    let myRegex = /\S+/ig;
    let myArray = str.match(myRegex);
    let sentence = "";

    for (let i = 0; i < myArray.length; i++) {
        if ( i > 0) {
            sentence = sentence + " ";
        }
        for (let j = 0; j < myArray[i].length; j++) {
            if (j === 0) {
                sentence = sentence + myArray[i][0].toUpperCase();
            } else {
                sentence = sentence + myArray[i][j].toLowerCase();
            }

        }
    }


    return sentence;
};




console.log(titleCase("I'm a little teA pot"));
