// Factorial 

// let num = 5;

// let result = 1;

// while (num > 1) {
//     result = result * num;
//     num--;
// }
// num    || condition || result =  result * num   
//  5 > 1 || true - > 5 = 1 * 5 
//  4 > 1 || true - > 20 = 5 * 4 
//  3 > 1 || true - > 60  = 20 * 3 
//  2 > 1 || true - > 120  = 60 * 2 
//  1 > 1 || true - > 120  = 120 * 1 

// console.log("Fact ", result);
/*
Fibonacci
 0 1 1+1 1+2 2+3 3+5 5+8 8+13 13+21 21+34
 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
 */

let a = 0, b = 1;
let count = 0;
let i = 5;

while (count < i) {
    console.log(a);
    let c = a + b; // 0 + 1 = 1
    a = b; // 1 = 1
    b = c; // 1
    count++;
}
