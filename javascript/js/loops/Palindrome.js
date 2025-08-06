let number = 1112;
let rev = 0;
let original = number;

while (number > 0) {
    let digit = number % 10; // get the last digit store 
    rev = rev * 10 + digit; // add last digit into rev
    number = Math.floor(number / 10);  // update the number with updated number
}

//  1 2 3 

if (original == rev) {
    console.log("Number is Palindrome");

} else {
    console.log("Number is not Palindrome");
}


//    