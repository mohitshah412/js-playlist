const accountId = 12345
let accountEmail = "hitesh@google.com"
var accountPassoward = "454545"
accountCity = "jaipur"
let accountState;

// accountId = 54323

console.log(accountId);  // not allowed

accountEmail = "hc@hc.com"
accountPassoward = "545454"
accountCity = "bengluru"

/*
    prefer not to use var
    because of issue in block scope, functional scope
*/

console.table([accountEmail, accountPassoward, accountCity, accountState]);