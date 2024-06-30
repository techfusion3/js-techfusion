// Primitive

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 376353725246426383637463839n

// Reference (Non Primitive)
// Array, objects, fuctions
const heroes = ["Iron Man", "Mahesh Babu", "Shah Rukh Khan"];
let myObj = {
    name: "Faijan",
    age : 22,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof heroes);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "techfusion"
let anothername = myYoutubename

console.log(anothername);

