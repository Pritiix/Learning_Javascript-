const accountId =1345
let accEmail= "priti@gmail.com"
var userName ="Priti"
accountCity="Hyd"

// accountId=234 not allowed because it is a constant variable
/*
Var not used bcz of issue in block scope and functional scope
Let and const are used in block scope
*/

console.log("accountId")

accEmail="kumari@gmail.com"
userName="Kumari"
accountCity="Bangalore"
console.table([accountId,accEmail,userName,accountCity])
