const person = {
    name: "Taylor",
    sayHello: function() {
        return `Hello! My name is ${this.name}.`;
    }
};

const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};


