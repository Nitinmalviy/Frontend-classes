console.log([1, 2, 3, 4, 5].length);
let arr = ["Hetshi", "Lenovo", "HP", "Dell"];

// add element in array push push method add element into at the last 

arr.push("Hitachi");

console.log(arr);
arr.pop();
console.log(arr);
let sliceResult = arr.slice(2, 4)
console.log(arr);

// console.log("sliceResult : ", sliceResult);
console.log("sliceResult : ", sliceResult);
console.log(arr);

let superhero = ['spiderman', "batman", "saktiman", "wakkanda"]
let spliceResult = superhero.splice(2, 2, "captain us", "hulk", "black panther");

console.log("spliceResult :", superhero);

const foreachResult = superhero.forEach((element, index) => {
    console.log(index, ":", element);

})

console.log(foreachResult);





// superhero.map((element, index) => { })
// superhero.filter((element, index) => { })
// superhero.reduce((prev, current, index) => { })

// let sent = ["I ", "love ", "coding"]

// console.log(sent.join(","));

// let numbers = [23, 45, 67, 89, 9, 47, 89];

