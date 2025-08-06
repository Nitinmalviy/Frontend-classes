let data = ["Fruit", 2, {}, true]; // 0 1 2 3 4
let users = [
    { userName: "Gopi", address: "Indore" },
    { userName: "Nivesh", address: "Mandsor" },
    { userName: "Heriom", address: "Ujjain" },
    { userName: "Dipanshu", address: "Bhopal" },
];

console.log(data.length);
console.log(data[1]);

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

for (let i = 0; i < users.length; i++) {
    console.log("Username :", users[i].userName, " || ", "Address:", users[i].address);
}


console.log();


