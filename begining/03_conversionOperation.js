let score = "100"; // string data type
console.log(typeof score); // string

let scoreNumber = Number(score); // conversion from string to number
console.log(typeof scoreNumber);
console.log(scoreNumber); // 100
// "33" => 33
// "33abs" => NaN (Not a Number)
// true => 1
// false => 0
let scoreBoolean = Boolean(scoreNumber); // conversion from number to boolean
// console.log(typeof scoreBoolean); // boolean
// console.log(scoreBoolean); // true
let scoreString = String(scoreBoolean); // conversion from boolean to string
// console.log(typeof scoreString);
// console.log(scoreString); // "true"

let login = "1"; // string data type

let booleanLogin = Boolean(login); // conversion from number to boolean
// console.log(typeof booleanLogin);
// console.log(booleanLogin);
// 1 => true 
// 0 => false
// "" => false
// "Darku" => true

let dome = 23;
let domeString = String(dome); // conversion from number to string
console.log(typeof domeString);
console.log(domeString);
// 23 => "23" in string format
// true => "true" in string format


//*****************************************Operation***********************************************/
// let value = 7;
// let negitiveValue = -value; // negation operation
// console.log(negitiveValue); // -7  

// console.log(value + 2); // addition operation
// console.log(value - 2); // subtraction operation
// console.log(value * 2); // multiplication operation
// console.log(value / 2); // division operation
// console.log(value % 2); // modulus operation (remainder of division)
// console.log(value ** 2); // exponentiation operation (value raised to the power of 2)
// console.log(value++); // post-increment operation (value is incremented after this line)
// console.log(value); // value is now 8
// console.log(negitiveValue+2); // negitiveValue is -7, so -7 + 2 = -5

let str1 = "Hello";
let str2 = " Darku";
let str3 = srt1 + str2; // string concatenation operation
console.log(str3); // "Hello Darku"
console.log(str1 + " " + str2); // "Hello Darku" with space in between