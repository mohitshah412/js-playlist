// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log("----------------------------------");

// let myCreatedDate = new Date(2024, 0, 21)
// let myCreatedDate = new Date(2024, 0, 21, 5, 3)
// let myCreatedDate = new Date("2024-01-21")
let myCreatedDate = new Date("01-21-2024")
console.log(myCreatedDate.toLocaleString());

console.log("----------------------------------");

// time stamp for design the quiz, design the poles(winner of the poles, who has given the fastest time )
let myTimeStamp =  Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor((Date.now()/1000)));

console.log("----------------------------------");

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

const option = newDate.toLocaleString('defult', {
    weekday: "long"
} )
console.log(option);


