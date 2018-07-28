function findElement(arr, func) {
    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        switch(func(arr[i])) {
            case true: return arr[i];
            break;
        }
    }

}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


