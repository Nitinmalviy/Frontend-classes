// What is call back function
// Answer : Callback is function which is passes as argument in another function called callback function.

//  Advantages of call back functions

/*
code reusability : You can pass a function as argument.
Better Control : UseFull for asynchronous programming like api's call's, timer, etc;

*/

// function hello() {
//     return "Hello Js";
// }

// function greeting(hello) {
// let rs = hello();
//  call argument function as callback function
//     console.log(rs);
// }

// greeting(hello);

//  Timer function

// setTimeout() // Ui popup, api

//  search bar mobile phone under 5000 2 sec api call

// function getData() {
//     console.log("Data is coming ........");
//     const timerFunction = () => {
//         console.log("Data get successfully......");
//     }
//     passed timerFunction as callback function in setTimeout function
//     setTimeout(timerFunction, 3000)
//     let intervalId = setInterval(timerFunction, 300)
//     setTimeout(() => { clearInterval(intervalId) }, 1000)

// }

// getData();