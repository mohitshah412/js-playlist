// Primitive : call by value (not give original memory reffernce, give copy of reffernce memory so any thing changes reflect copy)

// 7 Types : string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.1

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 12344534523452625656464233453n



// Refernce type (Non Primitive) : (reference in memory an be directly allocated to you )

// array, object, function

const hero = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3