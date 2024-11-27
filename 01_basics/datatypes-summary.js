// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doge"]
let myObj = {
    name: "kumar",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myYoutubename = "Mr.-kumar-bhai-gamer"

let anothername = myYoutubename
anothername = "kumar-gamer"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "kumar@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "arun@google.com"

console.log(userOne.email);
console.log(userTwo.email);
