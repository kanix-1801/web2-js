// let value = 1;
// let newV = -value;
// console.log(newV);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%3)

// let str1 = "string1"
// let str2 = "str2"
// let str3 = str1 +" "+ str2
// console.log(str3);

// console.log("1" + 2);//12
// console.log("1" + "2");//12
// console.log(1 + "2");//12
// console.log(1 + 2 +"2"); //32
// console.log("1" + 2 + 2); //122
// console.log(+true) //1
// console.log(+"") //0
// console.log(-"") //-0

// let gameCounter = 100;
// gameCounter++;
// console.log(gameCounter); //101
// console.log(++gameCounter); //102
// console.log(gameCounter++); //102
// console.log(gameCounter); //103


// console.log("2" > 1) //true  
// console.log("02" > 1) //true  
// console.log("02" < 1) //false  

// console.log(null >= 0) //true
// console.log(null < 0) //false
// console.log(null <= 0) //true
// console.log(null >= 0) //true
// console.log(null > 0) //false
// console.log(null == 0) //false

// ===
// console.log("2" === 2) //false


//datatypes

//  Primitive --> call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3