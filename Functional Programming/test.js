

var scores = [1, 2, 3, 4, 5];
var result = scores.reduce(function(total, score) {
    return total + score / scores.length;
});
console.log(result); // 4.75