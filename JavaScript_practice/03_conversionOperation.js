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