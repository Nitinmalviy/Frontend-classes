//  Separators

/* {
      
         }
      
         () , [] ; : 
       
    */

//  Arithmetic Operators
//  + , - , % , / , *
//  conditional / comparison // Relational Operators
// == != >= <= < >

// Assignment Operator ex:  =

//Shorthand operators

//a  = a + 1; shorthand -- > a +=1, b= b*20 ; b *=20

// Ternary Operators
/* 
          true ? "Yes" : "No";  
      */
//  Increment operators and Decrement Operators
/* 
        ++a; ++b; b++ , c--;
          ++ ,  --
      */

// Logical operators

/*

        AND  &&  ,OR ||, | pipe operator  NOT != 
      */

// Bitwise operator

/*
          Bitwise AND : &
          Bitwise OR  : |
          Bitwise XOR : ^
          Bitwise Complement : (~)
          Bitwise Left Shift : << 
          Bitwise Right Shift :>>
      */

// Practical Arithmetic Operators

let a = 20;

let b = 30;

document.write("<h3> Arithmetic Operators </h3> ", "</br>");
document.write("A + B : ", a + b, "</br>");
document.write("A - B : ", a - b, "</br>");
document.write("A * B : ", a * b, "</br>");
document.write("A / B : ", a / b, "</br>");

let reminder = 47 % 7;

document.write("Reminder : ", reminder, "</br>");

document.writeln(" <h3> Relational Operators </h3>", "</br>");

let x = 20;
let y = 20;

let result1 = x >= y; //  TRUE
let result2 = x == y; //  TRUE
let result3 = x <= y; //  TRUE
let result4 = x != y; //  FALSE
let result5 = x > y; //   FALSE
let result6 = x < y; //   FALSE

console.log("Result:", result1, "<h1></h1>");
console.log("Result:", result2);
console.log("Result:", result3);
console.log("Result:", result4);
console.log("Result:", result5);
console.log("Result:", result6);
