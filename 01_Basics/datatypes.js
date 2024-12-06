// Data types are divide into Primitive and Non-Primitive based on how data are stored in the memory and accessed from the memory

//Primitive-> 7 types, they are call by value
// String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non-Primitive)-> Array, Objects, Function

// JS is a dynamic type language

let score = 100
let score2 = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const heros = ["abc", "pqr", "xyz"];
let mmmyObj = {
    name: "Lena",
    age: 16,
}

const myFunction = function() {
    console.log("Hello");
}

console.log(typeof(someRandomVariable));
//typeof val 'null' is 'object'
console.log(typeof outsideTemp);
console.log(typeof myFunction);


