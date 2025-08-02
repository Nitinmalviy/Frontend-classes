// Loop iteration expression

//  while
/* Armstrong number : 153  5  = 125  1 = 1 , 3 = 27 = 153 ,  
   Palindrome number , 
   Strong number : A Strong Number is a number that equals, the sum of the factorials of the digits.
   
   ex :Digit =  120 sum of factorials = 5 * 4 * 3 * 2 * 1 = 120   
// 450  8 * 4 * 2* 1 = 230 // wrong

    Power 
    factorials
    Cube

*/


let number = 10;
let i = 0
// true
while (i <= 10) {
    // console.log("i : ", i);

    i++;
}

let j = 1;
let num = 2;
while (j <= 10) {
    // console.log(num, "x ", j, "=", j * num);

    j++; // post increment
}


let abc = 12;
let xyz = 12;
console.log("==================================");
console.log("Pre order increment : ", ++abc);
console.log("Post order increment : ", xyz++);
console.log("==================================");

console.log("Pre order decrement : ", --abc);
console.log("Post order decrement :", xyz--);
console.log("After post order decrement :", xyz);
console.log("==================================");


// Palindrome Number 121 
