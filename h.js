console.log("Start ....");

setTimeout(() => {
    console.log("Set Time out ......");

}, 0)


new Promise((res, rej) => {

    console.log("Promise");
    
    setTimeout(() => {
        res("Promise resolved........")

    }, 0)

})

console.log("end .......");
