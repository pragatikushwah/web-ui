let score="33abc"
console.log(typeof(score)) //string
console.log(typeof score)

let valueInnumber= Number(score)
console.log(typeof valueInnumber)//string
console.log(valueInnumber);//NaN

let sscore= null;
console.log(typeof sscore)//object

//"33" =>33
//"33abc"=>NaN
//true => 1; false=>0

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//true

//1 =>true ; 0=>false
//"""=>false
//"anshul"=>true 

let soeNumber=33
let  stringNumber=String(soeNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber)//string


//************************Operation***************************** */
let value =3;
let negvalue =-value
console.log(negvalue)//-3

console.log(2**3)//8

let str1="hello"
let str2=" anshul"
let str3=str1+str2
console.log(str3)//hello anshul

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32
console.log(+true)//1
console.log(+"")//0
let num1, num2, num3
num1=num2=num3=2+2
console.log(num1)//4

let gamecounter=100
gamecounter++;
console.log(gamecounter)//101
++gamecounter
console.log(gamecounter++)//102
console.log(gamecounter)//103