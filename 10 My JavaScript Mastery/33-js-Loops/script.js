// JavaScript Loops

// 1. For Loop

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// 2. For of Loop

const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 }];
for (let user of users) {
    console.log(user.name.toUpperCase());
}

const fruits = ["apple", "banana", "orange", "grape"];
for (let fruit of fruits) {
    console.log(fruit.toUpperCase());
}
// It's my own practice
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For in Loop

const loggedInUser = {
    name: "John",
    age: 30,
    email: "4Hs5U@example.com",
    isAdmin: true
};

for (const key in loggedInUser) {
    console.log(`${key}: ${loggedInUser[key]}`);
}

// While Loop

let isFinished = false;

while (!isFinished) {
    isFinished = confirm("Do you want to Quit?");
}

console.log("You have exited the loop.");