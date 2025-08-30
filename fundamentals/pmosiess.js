
let handleUserLogin = new Promise((resolve, reject) => {
    let data = "failed"
    if (data == "success") {
        resolve("You is resolved")
    } else {
        reject("Your is rejected")
    }
})

handleUserLogin.then((data) => {
    console.log(data);

}).catch((e) => {
    console.log(e);

}).finally(() => {
    console.log("Promise is executed");
})

