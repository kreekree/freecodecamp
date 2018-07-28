let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)\1\w+\1$/; // Change this line
let result = hello.replace(wsRegex,""); // Change this line