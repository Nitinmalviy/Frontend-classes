function stepOne() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Step one..");
        }, 1000);
    });
}

function stepTwo() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Step two..");
        }, 1000);
    });
}

function stepThree() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Step three..");
        }, 1000);
    });
}

// stepOne().then(message => stepTwo(message)).then(message => stepThree(message)).then(message => console.log(message));

async function execute() {
    // console.log(stepOne());
    // console.log(stepTwo());
    // console.log(stepThree());
    let res1 = await stepOne()
    console.log(res1);
    let res2 = await stepTwo()
    console.log(res2);
    let res3 = await stepThree();
    console.log(res3);
}

execute()
