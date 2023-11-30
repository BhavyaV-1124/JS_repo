
/* 

Primitive DataTypes: (call by value)
    7 Types:   String, Number, Boolean, null, undefined, Symbol, BigInt

Refrence Type(Non Primitive)
    Types: Array, Objects, Functions.

JavaScript is Dynamically typed language unlike Java which is Statically typed..

*/

const outSideTemp = null; // null
let userEmail; // undefined
const bigNumber = 345566433445644n; // give n to make it BigInt
const id = symbol('123'); // symbol makes 2 identical values different

const heroes = ["Shaktiman", "Nagraj", "doga"]; //Array

const obj = {
    person: "Bhavya",  // Object
    age: 25
}

const myFunction = function(){
    console.log("Hello World"); // Function
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory 

// Stack (Primitive), Heap (Non-Primitive)

