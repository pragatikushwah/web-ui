const name= "anshul"
const repo= 50
console.log(name+repo+"value")

console.log(`Hello my name is : ${name} and my repo counts is : ${repo}`)

const gameName=new String("hellothisiscodehub")  
// console.log(gameName[0])
// console.log(gameName,__proto__)
// console.log(gameName.toLowerCase())
// console.log(gameName.length)
// console.log(gameName.charAt(2))//p
// console.log(gameName.indexOf('p'))

const newString=gameName.substring(0,3)
//console.log(newString)


const anotherString=gameName.slice(-2)//reverse output
console.log(anotherString);
const anotherStringone="  hellopragati  "
console.log(anotherStringone)
console.log(anotherStringone.trim())

const url="https://pragati.com/pragati%20kushwah"
console.log(url.replace('%20','-'))

console.log(url.includes('pragati'))

const strname="hello this is you last day on earth"
console.log(strname.split(' '))