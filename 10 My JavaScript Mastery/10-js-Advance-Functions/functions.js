// Passing data into functions with parameters

let age = 21; // Defining a variable to hold the age of the user
let totalAdultYears; // Variable to hold the total adult years calculated

function calculateAdultYears(userAge) {
    let result; // using a local variable to store the result
    result = userAge;  // Assigning the value of userAge to result
    return result - 18; // Subtracting 18 from the result to calculate adult years
}

totalAdultYears = calculateAdultYears(age) // Calling the function with age as an argument
alert(totalAdultYears) // Displaying the result in an alert

age = 45; // Changing the age variable to a new value
totalAdultYears = calculateAdultYears(age) // Calling the function again with the new age
alert(totalAdultYears) // Displaying the new result in an alert
 
age = 55; // Changing the age variable again
totalAdultYears =  calculateAdultYears(age) // Calling the function again with the new age
alert(totalAdultYears) // Displaying the new result in an alert

// Now we don't have to do the calculations every time for adult years
// and it is due to the functions
// In the previous example, we had to calculate adult years multiple times


let salary = 2000; // Defining a variable to hold the salary of the user
let expenses = 100; // Defining a variable to hold the expenses of the user
let savings; // Variable to hold the savings calculated

function calculateSavings(salary, expenses) {
    savings = salary - expenses; // Calculating savings by subtracting expenses from salary
}
calculateSavings(salary, expenses); // Calling the function with salary and expenses as arguments
alert(savings); // Displaying the savings in an alert

function calculateSavingsWithParams(salary, expenses) {
    return salary - expenses; // Returning the savings calculated.
}
savings = calculateSavingsWithParams(5000, 900); // Calling the function and storing the result.
alert(savings); // Displaying the savings in an alert

salary = 10000; // Changing the salary variable to a new value
expenses = 2000; // Changing the expenses variable to a new value
savings = calculateSavingsWithParams(salary, expenses); // Calling the function again with new values
alert(savings); // Displaying the new savings in an alert