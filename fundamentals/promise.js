let promise = new Promise((resolve, reject) => {
    resolve("success")
})

let promise1 = new Promise((resolve, reject) => {
    reject("Failed")
})


promise.then((data) => {
    console.log(data);

})

promise1.then((data) => {
    console.log("then ", data);

}).catch((e) => {
    console.log(e);

})