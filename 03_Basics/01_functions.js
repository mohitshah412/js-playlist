
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumber(3, 5)

// console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());