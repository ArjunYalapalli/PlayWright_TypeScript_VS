// Variables
// var, let, const
var city = "New York";
let country = "USA";
const pi = 3.14;    

console.log("City:", city);
console.log("Country:", country);
console.log("Pi:", pi);

// Re-assigning variables
city = "Los Angeles";   
country = "Canada";
// pi = 3.14159; // Error: Cannot reassign a constant variable

// var vs let vs const
/* 
scope
declaration/assignment
re-declaration
re-initialization/re-assignment
hosting
 */
// var -- function scoped, can be re-declared and re-assigned, hoisted--We don't use var in modern JS/TS
// let -- block scoped, cannot be re-declared but can be re-assigned, not hoisted
// const -- block scoped, cannot be re-declared or re-assigned, not hoisted