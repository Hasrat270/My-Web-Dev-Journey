// JavaScript convert the empty string into Zero "0" which is equal to false
// that's why is shows that the input is valid

const enteredUserName = "";

if (enteredUserName) {
    console.log("Username is Valid!")
}

// JavaScript Practice

const developer = {
    name: "MERN Stack Developer",
    location: "Pakistan 🇵🇰",
    code: ["JavaScript", "HTML", "CSS", "Node.js"],
    technologies: {
        frontEnd: {
            js: ["React.js"],
            css: ["Tailwind CSS", "Shadcn/ui"]
        },
        backEnd: {
            js: ["Node.js", "Express.js"],
            database: ["MongoDB"]
        },
        tools: ["Postman", "Thunder Client", "Git"],
        architecture: ["RESTful APIs", "MVC Pattern"]
    },
    currentFocus: "Building scalable web applications",
    funFact: "I debug with console.log and I'm not ashamed! 🐛"
};