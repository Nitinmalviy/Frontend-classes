function sendMe() {
    console.log("Send me function");
}

//  callback function :- An function which is passing as parameter as function in another function.
//  hight order function :- An function who receive a function as parameter called high order function.
function printMe(callback, number) {
    callback()
    console.log(number);
}

printMe(sendMe, 21);


function helloMe(callback, number) {
    number++;
    callback(number);
}

helloMe((number) => {
    console.log("hi am arrow function i ma call back too", number);
}, 12)