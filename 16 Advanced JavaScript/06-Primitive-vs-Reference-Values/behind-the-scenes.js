const hobbies = ["sports", "cooking"];

hobbies.push("reading"); // <<< This is Allowed

// hobbies = ["sports", "cooking"]; <<< This is Not Allowed

console.log(hobbies);

const person = {
    name: "Hasrat Afridi",
    age: 21
}

function adultYears(p) {
    p.age -= 18;
    return p.age;
    // return p.age - 18;
}

console.log(adultYears( { ...person } ));  /* Here we used spread Operator to copy the Object Values and put it in a new List of (,) comma separated values , and here we are passing that NEWLY CREATED List to this Adult Years function */
console.log(person);

// Primitive Values : Numbers, Strings, Booleans
// Reference Values : Arrays, Objects, Functions

// Primitive Values are stored in the Stack
// Reference Values are stored in the Heap

// Heap can be defined as a collection of objects
// Stack can be defined as a collection of primitive values

// Heap : Stores Reference Values
// Stack : Stores Primitive Values
