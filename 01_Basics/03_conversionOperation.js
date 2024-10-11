let score = "mohit"

//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)          

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "mohit";
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "mohit" => True

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber);


//****************************** Operation *******************************

let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 2)
// console.log(2 / 2)
// console.log(2 % 2)

let str1 = "Hello"
let str2 = " mohit"
let str3 = str1 + str2

// console.log(str3)

// console.log(1 + "2")
// console.log("1" + 2)
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log((3 + 4) * 5 % 2)

// console.log(true)       // true
// console.log(+true)      // 1
// // console.log(true+)   // error unexpected token
// console.log(+"")        // 0

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2
// console.log(num2)

let gameCounter = 100
// gameCounter++;
gameCounter++; 
// console.log(gameCounter);

// link to study 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let x = 3
const y = x++  // return the value before incrementing OR 
            //postfix operator increment the number after the expression evaluate

console.log(`x:${x} , y:${y}`)

let a = 3
const b = ++a  // return the value after incrementing OR
            // prifix operator increment the number before the expression evaluate

console.log(`a:${a} , b:${b}`)
