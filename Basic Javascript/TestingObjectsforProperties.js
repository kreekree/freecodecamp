//Setup

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your code Here
  var hasProp = myObj.hasOwnProperty(checkProp);

  if (hasProp) {

    return myObj[checkProp];

  } else {

    return "Not Found";
  }

}

// Test your code by modifiying these values
checkObj("gift");
console.log(checkObj("gift"));
