let Array2D = [1, 2, 3, [4, 5, 6], 7, 8, 9]
// console.log("Before", Array2D);

// console.log("After : ", Array2D.flat());
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i = 0; i < matrix.length; i++) { // row
    for (let j = 0; j < matrix[i].length; j++) // col
    {
        console.log(`maxtrix[${i}][${j}] =`, matrix[i][j]);

    }
}