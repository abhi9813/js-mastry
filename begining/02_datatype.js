"use script"; //use all new JavaScript features
// code readability is important for always make professional code likhiye
// console.log( 3+4); console.log("Welcome to JavaScript"); isnot readable

let name = "Darku"
let age = "20";
let isStudent = true;
let marks = null; //null is a special value that represents no value
let address; //undefined is a special value that represents no value
let hobbies = ["reading", "writing", "coding"]; //array is a special data type
let person = { //object is a special data type
    name: "Darku",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "writing", "coding"],
    address: {
        city: "Delhi",
        state: "Delhi",
        country: "India"
    }
};

// number => true/false
// bigint 
// string => "Hello World"
// boolean => true/false
// null => standalone value that represents no value
// undefined => no value
// symbol => unique and immutable value

console.log(typeof "name"); //string
console.log(typeof age); //number
console.log(typeof true); //boolean
console.log(typeof null); //object (this is a bug in JavaScript)
console.log(typeof undefined); //undefined
console.log(typeof hobbies); //object (array is a special type of object) 
console.log(typeof person); //object
console.log(typeof Number(age));