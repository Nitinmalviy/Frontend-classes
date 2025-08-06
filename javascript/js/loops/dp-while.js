// do while

let i = 1;
do {
    console.log("Hello");
    i++;
    //  first print/execute  the logic after check the condition
} while (i <= 0)

//   input  = >


let userInput;

do {
    userInput = parseInt(prompt("Enter a number greater then 0"));  // take user input

} while (userInput <= 0 || isNaN(userInput))

console.log("Your Entered Number");

//  153 1 + 125 + 27 = 153   