function chunkArrayInGroups(arr, size) {
    let newArray = [];
    let groupSize;

    // determine the group size
    if (!(arr.length % 2)) {
        groupSize = (arr.length / size);
    } else {
        groupSize = Math.floor(arr.length / size) + 1;
    }

    // add groups to array
    for (let i = 0; i < groupSize; i++) {
        newArray.push([]);
    }

    // Keep count of which item to add next to each array grouping

    let count = 0;
    // We now have an array with the right amount of array groups. Lets now use a loop 
    // to cycle through each empty array and add in our items
    for (let i = 0; i < groupSize; i++) {
     for (let j = 0; j < size; j++) {
         if (count < arr.length) {
         newArray[i][j] = arr[count];
         count++;
         console.log(count);
        // console.log(newArray[2].length);
     }
    }
   } 
    return newArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

