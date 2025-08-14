// JavaScript Console Examples

let person = {
    name: "Hasrat",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Calling the method to greet

let adultYears;
function calculateAdultYears() {
    let totalAdultYears;
    totalAdultYears = person.age -18;
    return totalAdultYears;
}

console.log(`Total adult years: ${calculateAdultYears()}`); // Logging the total adult years