const accountId = 12345
let accountEmail = "mohit@google.com"
var accountPassword = "414141"
accountCity = "ahmedabad"
let accountState;

// accountId = 4567    constant type variable not allowed change 

console.log(accountId)   

accountEmail = "mohit@shah.com"
accoundtPassword = "212121"
accountCity = "bengaluru"

/*
    Prefer not to use var
    because of issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

