// Note system


//500 200 100 50 20 10  5 2 1 

const a = 12.72168283;
const b = -5.99;
const result = Math.round(a)
const result2 = Math.floor(b)
const result3 = Math.abs(b)
const result4 = Math.max(12, 16, 27, 90, 77)
const result5 = Math.min(12, 16, 27, 90, 77)
const result6 = Math.random();


// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log("---------> Random", Math.floor(result6 * 10) * 32);



//  1.2 = 1 4.9 = 4
let amount = 53853.50;

if (amount >= 500) {
    // cal how many 500 note in amout 
    let note500 = Math.floor(amount / 500);
    console.log("Rs 500 x", note500);
    //  rem amount after deduction 500 note
    amount = amount % 500;
}

console.log("amount after deduction of 500 Note :", amount);

if (amount >= 200) {
    let note200 = Math.floor(amount / 200)
    console.log("Rs 200 x", note200);
    amount = amount % 200;
}

console.log("amount after deduction of 200 Note :", amount);

if (amount >= 100) {
    let note100 = Math.floor(amount / 100)
    console.log("Rs 100 x", note100);
    amount = amount % 100;
}

console.log("amount after deduction of 100 Note :", amount);

if (amount >= 50) {
    let note50 = Math.floor(amount / 50)
    console.log("Rs 50 x", note50);
    amount = amount % 50;
}
console.log("amount after deduction of 50 Note :", amount);

if (amount >= 20) {
    let note20 = Math.floor(amount / 20)
    console.log("Rs 20 x", note20);
    amount = amount % 20;
}
console.log("amount after deduction of 20 Note :", amount);

if (amount >= 10) {
    let note10 = Math.floor(amount / 10)
    console.log("Rs 10 x", note10);
    amount = amount % 10;
}

console.log("amount after deduction of 10 Note :", amount);

if (amount >= 5) {
    let note5 = Math.floor(amount / 5)
    console.log("Rs 5 x", note5);
    amount = amount % 5;
}

console.log("amount after deduction of 5 Note :", amount);

if (amount >= 2) {
    let note2 = Math.floor(amount / 2)
    console.log("Rs 2 x", note2);
    amount = amount % 2;
}




