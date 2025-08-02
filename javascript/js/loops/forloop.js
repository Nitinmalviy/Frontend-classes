//  for loop

// for (variable declaration; condition : increment , decrement){}
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}


// for (let i = 1; i <= 5; i++) {
//     let line = "";
//     for (let j = 1; j <= 5; j++) {
//         line += `* `
//     }

//     console.log(line);

// }

// for (let i = 1; i <= 5; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += `* `
//     }
//     console.log(line);
// }

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {// 1 4 
        row += " ";// space
    }

    for (let k = 1; k <= i; k++) {
        row += "*";// start print
    }
    console.log(row);

}







/*

i = col , j = row
*****
*****
*****
*****

*
**
***
****
*****

        *
       **
      ***
 *  * * *
* * * * *
 */