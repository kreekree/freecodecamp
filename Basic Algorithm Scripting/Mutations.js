function mutation(arr) {
    let count = 0;
    let bool;

    for (let i = 0; i < arr[1].length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[1][i].toLowerCase() === arr[0][j].toLowerCase()) {
            count++;
            console.log(arr[1][i] + "found");
            break;
        }
      }
    }
    
    count === arr[1].length ? bool = true: bool = false
    return bool;
}

console.log(mutation(["hello", "hel"]));

