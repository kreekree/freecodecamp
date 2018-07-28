let vals = [5, 4, 1, 2, 9];

function sum(acc, val) {
    console.log(acc);
    return acc + val;
}

let answer = vals.reduce(sum, 10);

console.log(answer);


