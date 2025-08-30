
// var 

// function call1() {
//     console.log(a);

//     let a = 2;
//     let b = 3;
//     var c = 26;
// }
//  c= undefined
// a temporal dead

// let    x = 2


// setTimeout(() => {
//     console.log("Hello");
// }, 1000)


function one(userId, callback) {
    console.log("User ID one : ", userId);
    callback()
}


function two(userId, callback) {
    console.log("User ID two : ", userId);
    callback()
}

function three(userId, callback) {
    console.log("User ID three : ", userId);
    callback()
}

one(12, two(13, three(14, () => {
    console.log("three callback function");

})))
