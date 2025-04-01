java script note:
https://tc39.es/ecma262/   --> for standrd ruules
https://developer.mozilla.org/en-US/docs/Web/JavaScript

-----------------------------------------------------------------
##variable:
const accountId =1556678 //final/ constant 
let accountEmail="anshul@gmail.com" //currently using*******
var accountpassword="12345" //scope problem
accountCity="virindavan" // not good for practice
let abcd; // default value "undefined" will store
// accountId=9
/*
; optional
prefer not to use var becouse of issue of block scope and function scope
*/
console.log("hello");
console.log(accountId);
console.table([accountId, accountEmail, accountpassword, accountCity,abcd]);
output:
hello
1556678
┌─────────┬────────────────────┐
│ (index) │       Values       │
├─────────┼────────────────────┤
│    0    │      1556678       │
│    1    │ 'anshul@gmail.com' │
│    2    │      '12345'       │
│    3    │    'virindavan'    │
│    4    │     undefined      │
└─────────┴────────────────────┘
-------------------------------------------------------------------
##data type:
"use strict"; //define like we are using only new or updated language 
//alert(3+3) // we are using node js not the browser
console.log(3+3) // code redability shpuld be high
console.log("hello")

let name="anshu"
let age =30
let isLoggedIn=false
console.table([name, age, isLoggedIn])
//number =>2 to power 53 (rang) 
//bigint (readit, stock market)
//string =>""
//boolean= true, false
//null => standard value
//undefined // still value is not defined
//symbol =>unique

//object

console.log(typeof "Ram"); // string
console.log(typeof null);//object
console.log(typeof undefined); //undefined

output:
6
hello
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │ 'anshu' │
│    1    │   30    │
│    2    │  false  │
└─────────┴─────────┘
string
object
undefined
-----------------------------------------------------------------
