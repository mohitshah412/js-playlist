const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassoward = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 1 // not allowed

accountEmail = "hc@hc.com"
accountPassoward = "121212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassoward, accountCity, accountState]);


