/******************************************
 * Create a Basic JavaScript Object
 */

// let duck = {
//     name: "Aflac",
//     numLegs: 2
// };

// console.log(duck.numLegs);

/* Problem: Create a dog object with name and numLegs properties, 
and set them to a string and a number, respectively. */

// let dog = {
//     name: "Sasha",
//     numLegs: 4
// };

/******************************************
 * Use Dot Notation to Access the Properties 
 * of an Object
 */

//  let duck = {
//     name: "Aflac",
//     numLegs: 2
//  };

//  console.log(duck.name);


/* Problem: Print both properties of the dog object 
 * below to your console. */

//  let dog = {
//     name: "Spot",
//     numLegs: 4

//  };

//  console.log(dog.name, dog.numLegs);


/******************************************
 * Create a Method on an Object*/

// let duck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName: function() {
//         return "The name of this duck is " + duck.name + ".";
//     }
// }

// console.log(duck.sayName());


/*Problem: Using the dog object, give it a method called 
sayLegs. The method should return the sentence "This dog 
has 4 legs." */

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {
//         return "This dog has " + dog.numLegs + " legs.";
//     }
// };

// console.log(dog.sayLegs());

/******************************************
 * Make Code More Reusable with the this Keyword*/

//  let duck = {
//     name: "Aflac",
//     numLegs: 2,
//     sayName: function() {
//         return "The name of this duck is " + this.name + ".";
//     }
//  };

//  console.log(duck.sayName());

 /**Problem: Modify the dog.sayLegs method to remove any 
  * references to dog. Use the duck example for guidance. */

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {
//         return "This dog has " + this.numLegs + " legs.";
//     }
// };

// console.log(dog.sayLegs());

/******************************************
 * Define a Constructor Function
 */

// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
// }

/**Create a constructor, Dog, with properties name, color, 
 * and numLegs that are set to a string, a string, and a 
 * number, respectively. */

// function Dog() {
//     this.name = "Dog";
//     this.color = "Color";
//     this.numLegs = 6;
// }

// console.log(Dog());

/******************************************
 * Use a Constructor to Create Objects
 */

// function Bird() {
//     this.name = "Albert";
//     this.color = "blue";
//     this.numLegs = 2;
    // "this" inside the constructor always refers to the 
    //object being created
//}

// let blueBird = new Bird();
// console.log(blueBird);
// console.log(blueBird.name);
// console.log(blueBird.color);
// console.log(blueBird.numLegs);

// blueBird.name = "Elvira";
// console.log(blueBird.name);



// function Dog(){
//     this.name = "Rupert";
//     this.color = "brown";
//     this.numLegs = 4;
// }

/**Use the Dog constructor from the last lesson to create a 
 * new instance of Dog, assigning it to a variable hound. */

//  function Dog() {
//      this.name = "Rupert";
//      this.color = "brown";
//      this.numLegs = 4;
//  }

//  let hound = new Dog();

/**Extend Constructors to Receive Arguments
 */

//  let swan = new Bird();
//  swan.name = "Carlos";
//  swan.color = "white";

//  console.log(swan);

// function Bird(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
//   }

// let cardinal = new Bird("Bruce", "red");
//  console.log(cardinal);

// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
// }

// let terrier = new Dog("kree", "Black");
// console.log(terrier);

/******************************************
 * Verify an Object's Constructor with instanceof */

// let Bird = function(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
// }

// let crow = new Bird("Alexis", "black");

// console.log(crow instanceof Bird)// => true


// let canary = {
//     name: "Mildres",
//     color: "Yellow",
//     numLegs: 2
// };

// console.log(canary instanceof Bird);

/**Problem: Create a new instance of the House constructor, 
 * calling it myHouse and passing a number of bedrooms. Then, 
 * use instanceof to verify that it is an instance of House. */

// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
// }

// let myHouse = new House(6);

// console.log(myHouse);
// console.log(myHouse instanceof House);

/******************************************
 * Understand Own Properties */

//  function Bird(name) {
//      // own properties
//      this.name = name;
//      this.numLegs = 2;
//  }

//  let duck = new Bird("Donald");
//  let canary = new Bird("Tweety");


// let ownProps = [];

// for (let property in duck) {
//     if(duck.hasOwnProperty(property)) {
//         ownProps.push(property);
//     }
// }

// console.log(ownProps); // prints [ "name", "numLegs" ]


/**Problem: Add the own properties of canary to the array
 * ownProps
 */

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];

// for (let property in canary) {
//     if (canary.hasOwnProperty(property)) {
//         ownProps.push(property);
//     }
// }

// console.log(ownProps);

/*************************
 * Use Prototype Properties to Reduce Duplicate Code
 */

//  function Bird(name) {
//     this.name = name;
//  }

// Bird.prototype.numLegs = 2;

// let duck = new Bird("Donald");
// let canary = new Bird("Tweey");

// console.log(duck.numLegs, canary.numLegs);

/**Problem: Add a numLegs property to the prototype of Dog */

// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype.numLegs;

// let beagle = new Dog("Snoopy");
// console.log(beagle.numLegs);

/*************************
 * Iterate Over All Properties
 */

//  function Bird(name) {
//      this.name = name; //own property
//  }

//  Bird.prototype.numLegs = 2; // prototype property

//  let duck = new Bird("Donald");

//  let ownProps = [];
//  let prototypeProps = [];

//  for (let property in duck) {
//    if (duck.hasOwnProperty(property)) {
//       ownProps.push(property);
//    } else {
//      prototypeProps.push(property);
//    }
//  }

//  console.log(ownProps);
//  console.log(prototypeProps);

/**Problem: Add all of the own properties of beagle to the 
 * array ownProps. Add all of the prototype properties of 
 * Dog to the array prototypeProps.
 */

// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// for (let property in beagle) {
//     if (beagle.hasOwnProperty(property)) {
//         ownProps.push(property);
//     } else {
//         prototypeProps.push(property);
//     }
// }

// console.log(ownProps);
// console.log(prototypeProps);

/**
 * Understand the Constructor Property
 */

//   function Bird(name) {
//      this.name = name; //own property
//  }

//  function Dog(name) {
//     this.name = name; //own property
// }

// let duck = new Bird();
// let beagle = new Dog();

// console.log(duck.constructor === Bird);
// console.log(beagle.constructor === Dog);

// function joinBirdFraternity(candidate) {
//     if (candidate.constructor === Bird) {
//         return true;
//     } else {
//         return false;
//     }
// }

/**Problem:  Write a joinDogFraternity 
 * function that takes a candidate parameter 
 * and, using the constructor property, return true
 *  if the candidate is a Dog, otherwise return false.*/

//  function Dog(name) {
//      this.name = name;
//  }

//  function joinDogFraternity(candidate) {
//      if (candidate.constructor  === Dog) {
//         return true;
//      } else {
//          return false;
//      }
//  }

/*************************
 * Change the Prototype to a New Object
 */

//   function Bird(name) {
//      this.name = name; //own property
//  }

//  Bird.prototype.numLegs = 2;

//  Bird.prototype.eat = function() {
//      console.log("nom nom nom");
//  }

//  Bird.prototype.describe = function() {
//      console.log("My name is " + this.name);
//  }

//  Bird.prototype = {
//     numLegs: 2,
//     eat: function() {
//        console.log("nom nom nom"); 
//     },
//     describe: function() {
//         console.log("My name is " + this.name);
//     }
//  };
/************************* 
 * Add the property numLegs and the two methods
 * eat() and describe() to the prototype of Dog
 * by setting the prototype to a new object.
*/

// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype = {
//     numLegs: 4,
//     eat: function() {
//         console.log("I eats!");
//     },
//     describe: function() {
//         console.log("I describe");
//     }
// };
/*************************
 * Remember to Set the Constructor 
 * Property when Changing the Prototype
 */

//  Bird.prototype = {
//      constructor: Bird, // define the constrcutor property
//      numLegs: 2,
//      eat: function() {
//          console.log("nom nom nom");
//      },
//      describe: function() {
//         console.log("My name is " + this.name);
//      }
//  };
/**Problem: Define the constructor property on the Dog
 * prototype
 */

//  function Dog(name) {
//      this.name = name;
//  }

//  Dog.prototype = {
//      constructor: Dog,

//      numLegs: 2,
//      eat: function() {
//          console.log("nom nom nom");
//      },
//      describe: function() {
//          console.log("My name is " + this.name);
//      }
//  };

/*************************
 * Understand Where an Object’s Prototype Comes From
 */

//  function Bird(name) {
//      this.name = name;
//  }

//  let duck = new Bird("Donald");

//  console.log(Bird.prototype.isPrototypeOf(duck));

/**Problem: Use isPrototypeOf to check the prototype of
 * beagle
 */

//  function Dog(name) {
//      this.name = name;
//  }

//  let beagle = new Dog("Snoopy");

//  console.log(Dog.prototype.isPrototypeOf(beagle));

/************************
 * Understand the Prototype Chain
 */

//  function Bird(name) {
//      this.name = name;
//  }

//  console.log(typeof Bird.prototype);

//  console.log(Object.prototype.isPrototypeOf(Bird.prototype));

//  let duck = new Bird("Donald");
//  duck.hasOwnProperty("name");

 /**Modify the code to showthe correct prototype chain */
// function Dog(name) {
//     this.name = name;
// }

// let beagle = new Dog("Snoopy");

// console.log(Dog.prototype.isPrototypeOf(beagle));
// console.log(Object.prototype.isPrototypeOf(Dog.prototype));

// console.log(Dog.prototype);
/*************************
 * Use Inheritance So You Don't Repeat Yourself
 */

//  Bird.prototype = {
//      constructor: Bird
//  };

//  Dog.prototype = {
//     constructor: Dog
//  };

//  function Animal() {

//  };

//  Animal.prototype = {
//     constructor: Animal,
//     describe: function() {
//         console.log("My name is " + this.name);
//     }
//  };
/*************************
 * The eat method is repeated in both Cat and Bear. 
 * Edit the code in the spirit of DRY by moving 
 * the eat method to the Animal supertype.
 */

//  function Cat(name) {
//      this.name = name;
//  }

//  Cat.prototype = {
//      constructor: Cat,
//  };

//  function Bear(name) {
//      this.name = name;
//  }

//  Bear.prototype = {
//      constructor: Bear,
//  };

//  function Animal() {

//  }

//  Animal.prototype = {
//      constructor: Animal,
//      eat: function() {
//         console.log("nom nom nom");
//      },
//  };

/*************************
 * Inherit Behaviors from a Supertype
 */

//  function Animal() { 

//  }
//      Animal.prototype.eat = function() {
//          console.log("nom nom nom");
//  };

//  // let animal = new Animal();

//  let animal = Object.create(Animal.prototype);

//  console.log(animal.eat());
//  console.log(animal instanceof Animal);

/**Problem: Use Object.create to make two instances
 * of Animal named duck and beagle
 */

 function Animal() { }

 Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
 };

// //  let duck = Object.create(Animal.prototype);
//  let beagle = Object.create(Animal.prototype);

// console.log(duck.eat());
// console.log(beagle.eat());




/*************************
 * Set the Child's Prototype 
 * to an Instance of the Parent
 */

//  Bird.prototype = Object.create(Animal.prototype);

//  let duck = new Bird("Donald");
//  console.log(duck.eat());

/**Modify the code so that instances of Dog 
 * inherit from Animal */


//  function Animal() {

//  }

//  Animal.prototype = {
//      constructor: Animal,
//      eat: function() {
//         console.log("nom nom nom");
//      }
//  };

//  function Dog() { 

//  }

//  Dog.prototype = Object.create(Animal.prototype);

//  let beagle = new Dog();
//  console.log(beagle.eat());


/*************************
 * Reset an Inherited Constructor Property
 */


// function Bird() {

// }

// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird();

// console.log(duck.constructor);


// Bird.prototype.constructor = Bird;
// console.log(duck.constructor)

/**Problem: Fix the code so duck.constructor and
 * beagle.constructor return their respective constructors
 */

// function Animal() {

// } 

// function Bird() {

// }

// function Dog() {

// }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;


// let duck = new Bird();

// console.log(duck.constructor);

// let beagle = new Dog();

// console.log(beagle.constructor);


/*************************
 * Add Methods After Inheritance
 */

// function Animal() {

// }

// Animal.prototype.eat = function() {
//     console.log("nom nom nom");
// }

// function Bird() {

// }

// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constrcutor = Bird;

// Bird.prototype.fly = function() {
//     console.log("I'm flying!");
// };

// let duck = new Bird();
// console.log(duck.eat(), duck.fly());

/**Add all necessary code so the Dog object 
 * inherits from Animal and the Dog's prototype 
 * constructor is set to Dog. Then add a bark() 
 * \method to the Dog object so that beagle can 
 * both eat() and bark(). The bark() method should 
 * print "Woof!" to the console.*/

// function Animal() { 

// } 

// Animal.prototype.eat = function() {
//     console.log("nom nom nom");
// };

// function Dog() { 

// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     console.log("Woof!");
// };


// let beagle = new Dog();

// beagle.eat();
// beagle.bark();
 
/*************************
 * Override Inherited Methods
 */

//  ChildObject.prototype = Object.create(ParentObject.prototype);

//  ChildObject.prototype.methodName = function() {
//      ...
//  };


// function Animal() {
//     Animal.prototype.eat = function() {
//         return "nom nom nom";
//     }
// };

// function Bird() {

// }

// Bird.prototype = Object.create(Animal.prototype);

// Bird.prototype.eat = function() {
//     return "peck peck peck";
// };
/**Problem: Override the fly() method for Penguin
 * so that it returns "Alas, this is a flightless
 * bird"
 */


// function Bird() {

// }

// Bird.prototype.fly = function() {
//     return "I am flying";
// };

// function Penguin() {

// }

// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// Penguin.prototype.fly = function() {
//     return "Alas, this is a flightless bird.";
// };





// let penguin = new Penguin();
// console.log(penguin.fly());



/************************
 * Use a Mixin to Add Common Behavior 
 * Between Unrelated Objects
 */

//  let flyMixin = function(obj) {
//     obj.fly = function() {
//         console.log("Flying, woosh!");
//     }
//  };


// let bird = {
//     name: "Donald",
//     numLegs: 2
// };

// let plane = {
//     model: "777",
//     numPassengers: 524
// };

// flyMixin(bird);
// flyMixin(plane);

// console.log(bird.fly());
// console.log(plane.fly());

/**Problem: Create a mixin named glideMixin that defines
 * a method named glide. Then use the glideMixin to give both
 * bird and boat the ability to glide
 */

//  let bird = {
//      name: "Donald",
//      numLegs: 2
//  };

//  let boat = {
//      name: "Warrior",
//      type: "race-boat"
//  };

// let glideMixin = function(obj) {
//     obj.glide = function() {
//         console.log("Yay! I'm gliding through the air");
//     }
// };

// glideMixin(bird);
// glideMixin(boat);

// console.log(bird.glide());
// console.log(boat.glide());

/************************
 * Use Closure to Protect 
 * Properties Within an Object from 
 * Being Modified Externally
 */

// let bird = {
//     name: "Donald",
//     numLegs: 2
// };

// bird.name = "Duffy";

// console.log(bird);

// function Bird() {
//     let hatchedEgg = 10; // private property

//     this.getHatchedEggCount = function() { // publicly available
// //method that a bird object can use
//         return hatchedEgg;
//     };
// }
// let ducky = new Bird();
// console.log(ducky.getHatchedEggCount()); // returns 10

/**Problem: Change how weight is declared 
 * in the Bird function so it is a private variable. 
 * Then, create a method getWeight that returns the 
 * value of weight. */

//  function Bird() {
//      let weight = 15;
//      this.getWeight = function() {
//         return weight;
//      };
//  }

/************************
 * Understand the Immediately Invoked Function
 * Expression (IIFE)
 */

//  (function () {
//      console.log("Chirp, chirp!");
//  })(); // this is an anonymous function expression that
 //executes right away
 //Outputs "Chirp, chirp!" immedaitely

 /***********************
  * Rewrite the function makeNest and remove 
  * its call so instead it's an anonymous immediately 
  * invoked function expression (IIFE).
  */

//   (function () {
//       console.log("A cozy nest is ready");
//   })();

/************************
 * Use an IIFE to Create a Module
 */

// function glideMixin(obj) {
//     obj.glide = function() {
//         console.log("Gliding on the water");
//     };
// }

// function flyMixin(obj) {
//     obj.fly = function() {
//         console.log("Flying, wooosh!");
//     };
// }

// let duck = {
//     name: "Donald",
//     numLegs: 2
// };

// let motionModule = (function () {
//     return {
//         glideMixin: function (obj) {
//             obj.glide = function() {
//                 console.log("Gliding on the water");
//             };
//         },
//         flyMixin: function() {
//             obj.fly = function() {
//                 console.log("Flying, woosh!");
//             };
//         }
//     }
// })();

// motionModule.glideMixin(duck);
// duck.glide();

/************************
 **Problem: Create a module named funModule to wrap 
 the two mixins isCuteMixin and singMixin. 
 funModule should return an object.
 */




// let funModule = (function() {
//     return {
//         isCuteMixin: function(obj) {
//             obj.isCute = function() {
//                 return true;
//             };
//         },
//         singMixin: function(obj) {
//             obj.sing = function() {
//                 console.log("Singing to an awesome tune");
//             };
//         }
//     }
// })();












































































































































































































































































































