/*

1. Conditional Statement's  - if else if else

*/

//  userAge >= 18  yes No

let userAge = 22;

if (userAge >= 18) {
  // true
  //   console.log("Yes you can vote.");
  //   if (userAge >= 21) {
  //     console.log("Yes you can also eligible for marriage.");
  //   }
} else {
  // false
  //   console.log("Not eligible for vote");
}

//  student grad system

//  44% Fair 52% POOR 60% Good 75% vGood  90% Excellent

// const userPercentage = 59;

// if (userPercentage >= 90) {
//   console.log("Excellent");
// } else if (userPercentage >= 75) {
//   console.log("vGood");
// } else if (userPercentage >= 60) {
//   console.log("Good");
// } else if (userPercentage >= 52) {
//   console.log("POOR");
// } else if (userPercentage >= 44) {
//   console.log("Fair");
// }

// const isDrivingL = false;
// const isVoterId = true;

// if (isDrivingL || isVoterId) {
//   console.log("You eligible for passport verification");
// }

//  form  email password gender

let email = "sSS";
let userName = "sss";
let password = "ss";
let gender = "ss";

if (!email || !userName || !password || !gender) {
  console.log("Data is empty or invalid");
}

if (!null) {
  console.log("if block");
}
