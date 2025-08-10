let superHero = ["Spider-man", "iron-man", "batman", "Rocket", "black-panther"];

const resultForEach = superHero.forEach((element, index) => {
    // console.log(index, ":", element);
});

//  inserting a variable using `${}` in string with backtick called string interpolation.
// console.log(`Result of ForEach ${resultForEach}`);
// ----------------------

// const resultMap = superHero.map((element, index) => {
//     return `${index}:${element}`
// });

// console.log(`Result of Map : ${resultMap}`);

let employees = [
    { userName: "Gopilal", age: 23 },
    { userName: "Heriom", age: 21 },
    { userName: "Aman", age: 18 },
    { userName: "Dipanshu", age: 19 },
    { userName: "Nivesh", age: 20 },
];

const resultMap = employees.map((element, index) => {
    return element.age <= 20;
});

// console.log(`Result of Map : ${resultMap}`);

// Filter method in array ------------

// const resultFilter = employees.filter((element, index) => {
//     return element.age > 20 ? element.userName : "";
// });

// console.log(`Result of Filter : ${JSON.stringify(resultFilter)}`);

// let arr1 = [12, 13, 14, 15, 16, 17, 18].filter((item, i) => {
//     return item >= 15;
// })

// console.log(arr1);

//  Reduce method in array -----------------

// let arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// let reduceMethod = arr3.reduce((acc, current, index) => {
//     console.log(`Accumulate : ${acc}, CurrentValue :  ${current}`);

//     return acc + current;
// })

// console.log("Sum :", reduceMethod);

let arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let reduceMethod = arr3.reduce((acc, current, index) => {
    console.log(`Accumulate : ${acc}, CurrentValue :  ${current}`);

    return acc + current;
}, 0)

console.log("Sum :", reduceMethod);
console.log("<----------------------------------------->");

let reduceMethod1 = employees.reduce((acc, current, index) => {
    console.log(`Accumulate : ${acc}, CurrentValue :  ${current.age}`);

    return acc + current.age;
}, 0);

console.log("Sum :", reduceMethod1);
