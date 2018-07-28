//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

/* "Kristian", "lastName" should return "Vos"
"Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
"Harry","likes" should return an array

//Only change code below this line

//check if name is an actual contacts firstName

*/

function lookUpProfile(name, prop) {

  var hasNameProp;

  for (var i=0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] == name) {
      hasNameProp = true;
    } else {
      hasNameProp = false;
    }
 }



// Change these values to test your function
lookUpProfile("Akira", "likes");
