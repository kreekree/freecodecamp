//Un-curred function

function unCurried(x, y) {
    return x + y;
}


//Curried function

function curried(x) {
    return function(y) {
        return x + y;
    }
}

console.log(curried(2)(3));

var funcForY = curried(1);
console.log(funcForY(2));



//Impartial function
function impartial(x, y, z) {
    return x + y + z;
}

var partialFn = impartial.bind(this, 1, 2);

console.log(partialFn(10));