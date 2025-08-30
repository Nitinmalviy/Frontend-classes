/*
 exception --> exception is unwanted event that disturbed the flow of program.

 1/0 = arithmetical exception




 */

try {
    // loader = true
    //  all logic return in try block
    console.log("0----");

    // throw new Error("i want trhow error")
    console.log("----");
    // loader = false

} catch (error) {
    // loader = false
    console.log(error.message);
} finally {

    console.log("hello");

}