// Part 1
var x = 7;
function getName() {
    console.log(`Anand Jain`);
}

getName();
console.log(x);
// Part 2
getName();
console.log(x);

var x = 7;
function getName() {
    console.log(`Anand Jain`);
}

// Part 3

// getName();
// console.log(x);

var x = 7;
function getName() {
    console.log(`Anand Jain`);
}

console.log(getName); //prints function itself


// Part 4
console.log(getName); //prints function itself

var x = 7;
function getName() {
    console.log(`Anand Jain`);
}


// Part 5
var x = 7;
function getName() {
    console.log(`Anand Jain`);
}

getName();
console.log(x);
console.log(getName);

// Part 6
getName();
console.log(x);
console.log(getName);

var x = 7;
var getName = () => {
    console.log(`Anand Jain`);
}

// Part 7
getName();
console.log(x);
console.log(getName);

var x = 7;
var getName = () => {
    console.log(`Anand Jain`);
}

var getName2 = function () {
    console.log("Anand Jain")
}

//test
const shape = {
    radius: 10,
    diamter() {
        return this.radius * 2
    },
    p: () => 2 * Math.PI * this.radius
}

console.log(shape.diamter());
console.log(shape.p());
console.log(typeof shape.p());