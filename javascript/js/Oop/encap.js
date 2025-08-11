/*
    Encapsulation : - Binding data members (class variables), and method into a single unit 
    called the encapsulation.

*/

class BankAccount {
    #amount = 0;

    checkBal() {
        return `Your Available ${this.#amount}`
    }

    addDeposit(depAmount) {
        this.#amount += depAmount

        return `Deposit Successfully Amount : ${depAmount} Total Amount : ${this.#amount}`
    }

    withdrawAmount(withdrawAmt) {
        this.#amount -= withdrawAmt
        return `Withdraw Successfully Amount : ${withdrawAmt} Remaining Amount : ${this.#amount}`
    }
}

//  js object
// literals {}, using new keyword

//  constructor is responsible for init the object of class using new keyword 


//  memory - [4byte],[4byte],[4byte],[4byte] hashcode - memory address ke reference
const bank = new BankAccount();
// console.log(bank.#amount);
console.log(bank.addDeposit(1500));
console.log(bank.addDeposit(500));
console.log(bank.withdrawAmount(700));