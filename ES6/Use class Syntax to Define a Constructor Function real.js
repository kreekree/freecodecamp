function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Vegetable {
        constructor(veggie) {
            this.veggie = veggie;
        }
    }

    /*Alter code above this line */
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'