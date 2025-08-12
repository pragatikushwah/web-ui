//primitive
// 7 type: String, Number, Boolean, null, undefined, Symbol, BigInt
const score=30
const scorevalue=45.8

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
console.log(id)//Symbol(123)
console.log(anotherId)//Symbol(123)


//Reference 
//Array, Objects, Functions
const heros=["shaktiman", "natraj", "doga"]
let myObj={
    name: "rama",
    age:30
}
console.log(heros)
console.log(myObj)
const myfunction=function(){
    console.log("helo")
}
console.log(typeof myfunction)

//*******************************************************************************************

//stack (primitive) (we get the copy of valu), 
//heap (non-primitive/ reference)(we get the ref of object)
let muYouTube="HeloPragtai"
let anothername=muYouTube
anothername="kkppkk"
console.log(anothername)
let userOne ={
    email: "user@gooogle.com",
    upi:"user@ybl"
}
console.log(userOne)
let usertwo=userOne
usertwo.email="gg@google.com"
console.log(usertwo)