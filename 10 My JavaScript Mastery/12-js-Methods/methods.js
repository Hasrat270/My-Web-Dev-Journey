// Methods in JavaScript

let person = {
    name: "Hasrat",
    age: 25,
    greet() {
        alert(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Calling the method to greet
// alert name and age of the person