let score = "33"
let score2 = "33abc"
let score3 = false
let score4 = null
let score5 = undefined
console.log(typeof(score));

let valueInNumber = Number(score)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
let valueInNumber5 = Number(score5)
console.log("Type of '33': " + typeof valueInNumber);
console.log("Type of '33abc': " + typeof valueInNumber2);
console.log("Type of 'false': " + typeof valueInNumber3);
console.log("Type of 'null': " + typeof valueInNumber4);
console.log("Type of 'undefined': " + typeof valueInNumber5);
console.log("33abc: " + valueInNumber2);
console.log("false: " + valueInNumber3);
console.log("null" + valueInNumber4);
console.log("undefined" + valueInNumber5);

// 33 => Number
// 33abc => NaN
// true => 1; false => 0

let isLoggedIn = "abc" //"" //1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 10
let stringNumber = String(someNumber)
console.log(stringNumber + ": " + typeof(stringNumber));

console.log("------------Operations------------");

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log(+true); //Bad practice
// console.log(+"");

