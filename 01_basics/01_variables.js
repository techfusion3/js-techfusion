const accountId = 14453
let accountEmail = "faijan@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2 Not Valid

console.log(accountId);

/*
Prefer not use var because of issue in block scope and functional scope
*/

accountEmail = "tf@tf.com"
accountPassword = "21212121"
accountCity = "New Delhi"

console.table([accountId, accountEmail, accountPassword,  accountCity, accountState])