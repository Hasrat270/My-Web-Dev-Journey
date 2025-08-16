import { readFileSync, writeFileSync } from 'fs';

class Job {
    constructor(title, location, salary, workHours, fullTime) {
        this.title = title;
        this.location = location;
        this.salary = salary;
        this.workHours = workHours;
        this.fullTime = fullTime;
    }
}

// Create a new instance of the Job class with data
const hacker = new Job("Hacker", "karachi", "50000$", "8 hours", true);

// Read the existing data from the file
const existingData = readFileSync('jobs.json');

// Parse the existing data as JSON
const jsonData = JSON.parse(existingData);

// Add the new data to the array

jsonData.push(hacker);

// Write the updated data back to the file
writeFileSync('jobs.json', JSON.stringify(jsonData, null, 2));

// Print the updated data
console.log(hacker);