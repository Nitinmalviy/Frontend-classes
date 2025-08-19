let obj1 = {}; // object laterals

let obj2 = { name: "nitin" };

let obj3 = {
    address: "Khandwa naka",
};

let obj4 = {
    address: "Khandwa naka",
};

//  a ------ b   

// obj2 ------- [prototype] --- Object [obj3] || null

// Object.setPrototypeOf(obj2, obj3)

// console.log("getPrototypeOf ---", Object.getPrototypeOf(obj2));


let computer = { cpu: 15 };
let lenovo = { screen: "HD", __proto__: computer }
let tomHardware = {}
console.log(`lenovo `, lenovo.__proto__);