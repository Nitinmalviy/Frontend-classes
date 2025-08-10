// String 

let firstName = "Gopilala";
let lastName = " Anjaniya";

let fullName = firstName.concat(lastName);

// console.log(fullName);
// console.log(fullName);
// "Gopilal"  - G 0 , o 1 , p 2 index

// reverse a sentence


function reverseSentence(sen) {
    /*
        1. split the string form space and store in array as indexing ["i","love","coding"]
        2. "" +=coding. love , i
    */
    let words = sen.split(" ");
    let revString = "";
    for (let i = words.length - 1; i >= 0; i--) {
        revString += `${words[i]} `
    }
    return revString
}

// const result = reverseSentence("i love coding")
// console.log(result);
// output -> coding love i 




console.log("nitin".toUpperCase());
console.log("Nitin".toLowerCase());
console.log("Nitin".substring(1, 4));
let a = "abcdefghijklmnop";

// console.log(a.charAt(a.length - 1));
// console.log(a.includes("h"));
// console.log(a.replace("a", "z"));
const user = [{ userName: "Aaman" }, { userName: "Adaarsh" }, { userName: "Abhinav" }, { userName: "Bharat" }]

console.log(user.forEach((item) => {
    console.log("->", item.userName.startsWith("Aa"));

}));


/*
/about , / contact

visiblePages  = ["about" , "home"]
*/
/*
listen , silent -> anagram

["eat", "aet", "tea", "lia",, "ail", "ial", "atr"];


1. arr[i] == "aet"  == arr[i+1] group []


output : - > group of anagram -> [["eat", "aet", "tea"],["ail", "ial"]]

2. count the char of paragraph
3. count the words of paragraph
4. "ajdoiaudpadapudaddadadp"---> find the vowel and consonant.
*/


