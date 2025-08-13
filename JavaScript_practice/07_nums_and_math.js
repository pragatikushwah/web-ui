const score=400
console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(typeof(balance))

const otherNumber=239.8966
console.log(otherNumber.toPrecision(4))

const hundreds=10000000
console.log(hundreds)
console.log(hundreds.toLocaleString('en-IN'));

//---------------------------------------------------------------------------

console.log(Math)
console.log(Math.abs(-55))
console.log(Math.round(6.8))
console.log(Math.ceil(6.8))
console.log(Math.floor(6.8))
console.log(Math.min(2,4,6,8,1,0))

console.log(Math.random(6.8))//random gives values between 0 to 1
console.log((Math.random()*10)+1)
console.log((Math.random()*10)+1)
console.log(Math.round(6.8))

const min=10
const max=20
console.log(Math.random(6.8))//random gives values between 0 to 1
console.log(Math.floor(Math.random()*(max-min+1))+min)//bcz i added min so it will always give value>10