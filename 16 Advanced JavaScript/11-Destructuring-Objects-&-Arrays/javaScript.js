// Destructuring Arrays
const input = ["Hasrat", "Khan"];

const [firstName, lastName] = input;

console.log(`My name is ${firstName} ${lastName}`); // <<< Here we are destructuring the array

// Destructuring Objects
const user = {
    myName: "Hasrat",
    age: 22,
    isAdmin: true,
};

const { myName: meraName, age: meriAge, isAdmin: adminHo } = user; // <<< Here we are destructuring the object and assigning them to different variables

if (adminHo) {
    console.log(`My name is ${meraName} and I am ${meriAge} years old.`);
}