function frankenSplice (arr1, arr2, n) {
    let newArr2 = [...arr2]
    newArr2.splice(n, 0, ...arr1);

    console.log(arr1, arr2);

    return newArr2;


}


console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

