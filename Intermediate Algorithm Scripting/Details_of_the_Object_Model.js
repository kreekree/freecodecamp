function Employee() {
    this.name = '';
    this.dept = 'general';
}


function Manager() {
    Employee.call(this);
    this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
    Employee.call(this);
    this.projects = [];
}

WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;

function SalesPerson() {
    WorkerBee.call(this);
    this.dept = 'sales';
    this.quota = 100;
}

SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
    WorkerBee.call(this);
    this.dept = 'engineering';
    this.machine = '';
}

Engineer.prototype = Object.create(WorkerBee.prototype)


/*************************************************************
 * Create objects with simple definitions
 */

var jim = new Employee;
console.log(jim.name); 
console.log(jim.dept);

var sally = new Manager;
console.log(sally.name);
console.log(sally.dept);
console.log(sally.reports);

var mark = new WorkerBee;
console.log(mark.name);
console.log(mark.dept);
console.log(mark.projects);

var fred = new SalesPerson;
console.log(fred.name);
console.log(fred.dept);
console.log(fred.projects);

var jane = new Engineer;
console.log(jane.name);
console.log(jane.dept);
console.log(jane.projects);
console.log(jane.machine);

