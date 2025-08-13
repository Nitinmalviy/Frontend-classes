//

// class A a1 a1 // polymorphism 
/*

                    a1(){} a1(){}


*/

// class Animal {
//     makeSound(a, b) { }
//     makeSound(a, b, c) { }
// }

/* 
static polymorphism - compile time polymorphism -> method overloading js does not support
method overloading : In same class have same method with different parameter called the method over loading.

*/

/* 
dynamic polymorphism - run time polymorphism -> method overriding js does not support
method overriding : Same method with same parameter in two different classes called the method overriding .

*/

class Species {
    sound() {
        console.log("Species make sound");

    }
}

class Human extends Species {
    sound() {
        console.log("Human can speak");
    }
}