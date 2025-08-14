// JavaScript Functions Example
// Functions are reusable blocks of code that perform a specific task.
// They help in reducing code duplication and improving maintainability.
// In this example, we will demonstrate how to use functions to calculate adult years.
// We will create a function to calculate the number of years since a person turned 18.

let age = 21;
let totalAdultYears;

function calculateAdultYears() {
    return age - 18;
}

totalAdultYears = calculateAdultYears()
alert(totalAdultYears)

age = 45;
totalAdultYears = calculateAdultYears()
alert(totalAdultYears)

age = 55;
totalAdultYears =  calculateAdultYears()
alert(totalAdultYears)

// Now we don't have to do the calculations every time for adult years
// and it is due to the functions
// In the previous example, we had to calculate adult years multiple times
