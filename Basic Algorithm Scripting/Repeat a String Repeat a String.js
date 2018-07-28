function repeatStringNumTimes(str, num) {
    // repeat after me
    let repeatString = "";
    
    for (let i = 0; i < num; i++) {
        repeatString += str;
    }
    return repeatString;
}
  
  console.log(repeatStringNumTimes("abc", 3));