let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;

console.log(quit.match(quRegex)); // Returns ["q"]
console.log(noquit.match(qRegex)); // Returns ["q"]

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));
// Returns true






