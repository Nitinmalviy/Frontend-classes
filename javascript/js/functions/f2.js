
const data = {
    name: "Motorola",
    model: "G85",
    price: "22500"
};
// key : data

function processData(data) {
    console.log("Data", data);
    console.log("Data is processing");
    let myData = data;
    myData.ram = "8gb"
    myData.rom = "256gb"
    console.log("Data is processed");
    return myData
}

const updatedData = processData(data)

// console.log(updatedData);


function printTable(tableNum, tlegnth) {
    for (let i = 1; i <= tlegnth; i++) {
        console.log(tableNum, " x ", i, " = ", tableNum * i);
    }
}

// printTable(5, 10)