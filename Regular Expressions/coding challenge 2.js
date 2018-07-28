var johnG1 = 11;
var johnG2 = 500;
var johnG3 = 10;

var markG1 = 111;
var markG2 = 1000;
var markG3 = 10;

var maryG1 = 111;
var maryG2 = 10;
var maryG3 = 10;

var avgJ = (johnG1 + johnG2 + johnG3) / 3;
var avgM = (markG1 + markG2 + markG3) / 3;
var avgMary = (maryG1 + maryG2 + maryG3) / 3;

if ( avgJ < avgM && avgM < avgMary) {
    console.log("The winner is Mary. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ < avgM && avgM > avgMary) {
    console.log("The winner is Mark. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ < avgM && avgM === avgMary) {
    console.log("Mark and Mary Win BUT The game is tied bewteen them! " + " Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ < avgM && avgM < avgMary) {
    console.log("The winner is Mary. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ > avgM && avgJ < avgMary) {
    console.log("The winner is Mary. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ > avgM && avgM > avgMary) {
    console.log("The winner is John. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ > avgM && avgM == avgMary) {
    console.log("The winner is John. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ === avgM && avgM < avgMary) {
    console.log("The winner is Mary. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ === avgM && avgM > avgMary) {
    console.log("Mary and John Win BUT The the game is tied bewteen them! " + " Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ < avgM && avgM < avgMary) {
    console.log("The winner is Mary. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ === avgM && avgM === avgMary) {
    console.log("It's a three way tie! " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ > avgM && avgJ === avgMary) {
    console.log("John and Mary Win But the game is tied between them! " + " Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ < avgM && avgJ > avgMary) {
    console.log("The winner is Mark. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
} else if ( avgJ < avgM && avgJ === avgMary) {
    console.log("The winner is Mark. " + "Johns average score is: " + avgJ + " Marks average score is: " + avgM +  " Marys average score is: " + avgMary);
}