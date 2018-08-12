/* Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
 */



  var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly

    this.getFullName = function() {
      return this.firstName + " " + this.lastName;
    };

    this.getFirstName = function() {
        if (this.firstName === undefined) {
          this.setFirstName(firstAndLast.match(/\w+/)[0]);
          return firstAndLast.match(/\w+/)[0];
        } else {
          return this.firstName;
        }
    };

    this.getLastName = function() {
      if (this.lastName === undefined) {
        this.setLastName(firstAndLast.match(/\w+$/)[0]);
        return firstAndLast.match(/\w+$/)[0];
      } else {
        return this.lastName;
      }
    };

    this.setFirstName = function(first) {
      this.firstName = first;
    };

    this.setLastName = function(last) {
      this.lastName = last;
    };

    this.setFullName = function(firstAndLast) {
      this.fullName = firstAndLast;
    };

  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();




console.log(Object.keys(bob).length); // should return 6.
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