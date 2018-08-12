/* Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) 
setFullName(firstAndLast). Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object. */


var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly

    // Getters
    this.getFirstName = function() {
        return this.firstName || firstAndLast.split(" ")[0];
    };

    this.getLastName = function() {
        return this.lastName || firstAndLast.split(" ")[1];
    };

    this.getFullName = function() {
        return this.getFirstName() + " " + this.getLastName() || firstAndLast;
    };

    // Setters
    this.setFirstName = function(first) {
        this.firstName = first;
    };

    this.setLastName = function(last) {
        this.lastName = last;;
    };
    
    this.setFullName = function(firstAndLast) {
        this.setFirstName(firstAndLast.split(" ")[0]);
        this.setLastName(firstAndLast.split(" ")[1]);
    };

  };
  
  var bob = new Person('Bob Ross');

  console.log(bob.getFullName());


 console.log(Object.keys(bob).length); // length should return 6.
 console.log(bob instanceof Person); // should return true.
 console.log(bob.firstName); // should return undefined.
 console.log(bob.lastName); // should return undefined.
 console.log(bob.getFirstName()); // should return "Bob".
 console.log(bob.getLastName()); // should return "Ross".
 console.log(bob.getFullName()); // should return "Bob Ross".
 bob.setFirstName("Haskell");
 console.log(bob.getFullName()); // should return "Haskell Ross" after bob.setFirstName("Haskell").
 bob.setLastName("Curry");
 console.log(bob.getFullName()); // should return "Haskell Curry" after bob.setLastName("Curry").
 bob.setFullName("Haskell Curry");
 console.log(bob.getFullName()); // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
 console.log(bob.getFirstName()); // should return "Haskell" after bob.setFullName("Haskell Curry").
 console.log(bob.getLastName()); // should return "Curry" after bob.setFullName("Haskell Curry").
 console.log(Object.keys(bob).length);