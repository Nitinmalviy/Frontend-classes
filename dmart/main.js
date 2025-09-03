

function getUserGander() {
    let userGander = prompt("Enter you gander...")
    let ganders = ["male", "female", "others"]
    if (!ganders.includes(userGander.toString().toLowerCase())) {
        alert("Invalid Gander")
        console.log();
        getUserGander()
    } else {
        localStorage.setItem("user-gander", userGander)
    }
}

getUserGander()

function renderProduct() {
    //  render products using loop use dom create card 
    let data = localStorage.getItem("products");
    let products = JSON.parse(data);
    let cartUi = `
    `
}



function addToCart() {


}