// function getIndexToIns(arr, num) {
//     // Find my place in this sorted array.

//     return num;
//   }
  
//   getIndexToIns([40, 60], 50);


  function getIndexToIns(arr, num) {

    let k = 1;
    let indexNum;
    let place;

    for (let m = 0; m < k; m++) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          arr.splice(i, 2, arr[i + 1], arr[i]);
          k++;
      } 
    }
  }

if (arr.length === 0) {
  place = 0;
}

for (let i = 0; i < arr.length; i++) {
   if (num > arr[i] && num < arr[i + 1]) {
   place = i + 1;
 } else if (num === arr[i] && num < arr[i + 1]) {
   place = i;
 } else if (num > arr[arr.length - 1]) {
     place = arr.length;
 } 
}
return place;

};

console.log(getIndexToIns([], 1));



