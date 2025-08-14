// JavaScript Exercise time

// Create three new variables
let courseName = "Ethical Hacking"; // Variable to hold the course title
let coursePrice = "$299"; // Variable to hold the course price
let courseGoals = ["Learn ethical hacking", "Understand cybersecurity", "Master penetration testing"];

// output the values of the variables
alert(courseName)
alert(coursePrice)
alert(courseGoals.join(", ")); // Join array elements into a string for display

// Grouping the variables into an object
let onlineCourse = {
    name: courseName,
    price: coursePrice,
    goals: courseGoals
};

// Alerting the course details using the onlineCourse object
alert("Course Name: " + onlineCourse.name + "\n" +
      "Course Price: " + onlineCourse.price + "\n" +
      "Course Goals: " + onlineCourse.goals.join(", ")); // Join array elements into a string for display


// Accessing and alerting the second goal from the goals array
alert(onlineCourse.goals[1]);

// Function to access any variable from any array dynamically
function getListItems(array, index) {
    return array[index];
}

let firstGoal = getListItems(onlineCourse.goals, 0);
alert("First Goal: " + firstGoal);