function findPrims(start, end) {
    // Prime number is number which  divisible by 1 and it's self
    if (start < 1) {
        throw new Error("Please Pass the value of start parameter in findPrims function")
    }

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}


function isPrime(number) {
    if (number < 2) return false // 1 , 0 not prime number
    for (let j = 2; j < number; j++) { // 2 10 / 2 /3 /4 /5 /6 10 == 9
        if (number % j === 0) {
            return false
        }
    }
    return true;
}


// findPrims(2, 100);

console.log(isPrime(53));
;




// 20    20 2 3  4 5  20 % j //19  === 0 