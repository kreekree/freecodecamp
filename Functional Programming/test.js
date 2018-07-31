


function curried(x) {
    return function(y) {
        return x + y;
    }
}

var mycurry = curried(1);


function addone(y) {
    return y + 1;
}

console.log(mycurry(2));


