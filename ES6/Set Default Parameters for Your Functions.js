function greeting(name = "Anonymous") {
    return "Hello " + name;
}

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

