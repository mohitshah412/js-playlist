// Two types datatypes

// 1. primitive : call by value means copy(access) this datatype memory give copy so changes not effect memory, change happen in copy.

// string, number, boolean, null, object, undefined, symbol, bigint

let name = "mohit"
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('101')
const anotherId = Symbol('101')

const bigNumber = 3456543576654356754n

// console.log(id === anotherId)

console.table(typeof name)
console.table(typeof scoreValue)
console.table(typeof isLoggedIn)
console.table(typeof outsideTemp)
console.table(typeof userEmail)
console.table(typeof id)
console.table(typeof bigNumber)


// 2. refernce (non primitive) : call by refernce means memory give refernce this datatype 

// array, object, function 

const heros = ["saktiman", "naagraj", "doga"]

let myObj = {
    name : "mohit",
    age : 22
}

const myFunction = function(){
    console.log("hello");
}

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)  // function object
