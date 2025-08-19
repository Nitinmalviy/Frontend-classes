let user = { userName: "Gopilal", age: 23 }

/* shallow copy ->

*/
// 65464ad46ad
let data = {
    image: "",
    age: 56,
    x: 12
}
// 46d6adw46a4dad
let newData = { ...data, y: 15, x: 23 }
// console.log("data : -----", data);

// console.log("newData --->", newData);


// let newUser = {...user,}
// --------- >

// deep copy --> 

let hero = { name: "spiderman", comic: "marvel", edition: 5 }

console.log("before - ", hero);

Object.assign(hero, { movieName: "Home coming" })

console.log("after - ", hero);
