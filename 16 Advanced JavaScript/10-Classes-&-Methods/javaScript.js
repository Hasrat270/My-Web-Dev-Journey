// Classes : A template for creating objects
// Constructor : A special method that is called when a new object is created
// Methods : Functions stored as a property of a class or an Object
class Job {
    constructor(title, location, salary, workHours, fullTime,) {
        this.title = title;
        this.location = location;
        this.salary = salary;
        this.workHours = workHours;
        this.fullTime = fullTime;    
    }
    describe() {
        console.log(`I am a ${this.title} in ${this.location} and my salary is ${this.salary} and my work hours is ${this.workHours} and yeah, I do full time job it's ${this.fullTime}.`);
    }
}

const developer = new Job("React developer", "karachi", "50000$", "8 hours", true);

console.log(developer.describe());