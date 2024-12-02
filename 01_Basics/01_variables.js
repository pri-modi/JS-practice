const accountId = 14423 //Can't be reassigned. Used to declare constant values
//To declare variables
let accountEmail = "abc@gmail.com"
var accountPassword = "abc123"
accountCity = "Jaipupr"
let accountState;

/*
Try to not use 'var'
Because of issue in block scope and functional scope
*/

accountEmail = "pqr@gmail.com"
accountPassword = "pqr456"
accountCity = "Udaipur"

// accountId = 2
console.log(accountId);

//To get output in table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
