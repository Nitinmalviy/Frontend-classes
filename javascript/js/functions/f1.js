//  function is block of code that called by programmer where it's needed.

//  Immediate Invoke Function Execution / Anonymous Function
(function () {
    console.log("IFFE si calling");
}());

//  normal/ Named function function
// function getUsers() {
//     let userName = "Don joy"
//     let age = 25;
//     let gander = "male"
//     userData = { userName, age, gander }
//     // return `Username : ${userName} Age : ${age} , Gander : ${gander}`;
//     return userData
// }

// let result = getUsers()

// console.log(result);


//  variable function

// const getBlogsDetails = function () {
//     console.log("This blogs details");
// }

// getBlogsDetails()

// IIFE


//  Arrow function this

const getMyScore = () => { }

// constructor function

function Person(fullName, age, occupation) {
    this.fullName = fullName;
    this.age = age
    this.occupation = occupation
}

new Person();