let a = 8, b = 6;
(() => {
    "use strict";

    [a, b] = [b, a];

})();

console.log(a); // should be 6
console.log(b); // should be 8