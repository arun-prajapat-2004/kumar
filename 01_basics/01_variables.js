const accountId = 144553
let accountEmain = "kumar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not alliwed

accountEmain = "prajapat@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue im block scope and functional scope
*/

console.table([accountId, accountEmain, accountPassword, accountCity, accountState])