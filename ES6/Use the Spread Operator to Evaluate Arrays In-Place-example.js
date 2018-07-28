// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr); 

// console.log(maximus);


const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

console.log(maximus);