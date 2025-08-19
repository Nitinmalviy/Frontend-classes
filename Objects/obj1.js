let obj1 = {
    1: "one", 2: "Two", 3: "Three"
}

Object.assign(obj1, { 4: "Four" })
console.log("Before", obj1);

Object.freeze(obj1)
// Object.assign(obj1, { 5: "Five" })

console.log("After", obj1);

console.log(Object.keys(obj1));
console.log(Object.entries(obj1));

