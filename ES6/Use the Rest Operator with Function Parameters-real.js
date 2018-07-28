const sum = (function() {
    "use strict";
    return function sum(...args) {
        return args.reduce((sum) => sum + arg);
    };

})();
console.log(sum(1, 2, 3)); // 6



