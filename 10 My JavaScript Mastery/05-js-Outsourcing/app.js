// Outsourcing JavaScript Example
// This code defines a profile for a software developer named Hasrat.
let name = "Hasrat";
let age = 23;
let occupation = "Software Developer";
let userLocation = "Pakistan"; // Only declare once!
let skills = ["JavaScript", "React", "Node.js"];
let experience = 5; // years of experience
let projects = [
    {
        title: "E-commerce Website",
        description: "Developed a full-stack e-commerce application using React and Node.js.",
        year: 2022
    },
    {
        title: "Portfolio Website",
        description: "Created a personal portfolio website to showcase my skills and projects.",
        year: 2023
    }
];
let certifications = [
    {
        title: "JavaScript Developer Certification",
        issuer: "Online Learning Platform",
        year: 2021
    },
    {
        title: "React Professional Certification",
        issuer: "Online Learning Platform",
        year: 2022
    }
];
let languages = ["English", "Urdu"];
let hobbies = ["Reading", "Traveling", "Coding"];
let references = [
    {
        name: "John Doe",
        position: "Senior Developer",
        contact: "+92-308-2841437",
        email: "hasrat@gmail.com"
    },
    {
        name: "Jane Smith",
        position: "Project Manager",
        contact: "+92-308-2841437",
        email: "dummy@email.com",
        relationship: "Former Colleague"
    }
];
let personalStatement = "I am a passionate software developer with a strong background in web development. I enjoy solving complex problems and continuously learning new technologies. My goal is to contribute to innovative projects that make a difference.";

// Function to display the profile
function displayProfile() {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Occupation: ${occupation}`);
    console.log(`Location: ${userLocation}`);
    console.log(`Skills: ${skills.join(", ")}`);
    console.log(`Experience: ${experience} years`);
    
    console.log("\nProjects:");
    projects.forEach(project => {
        console.log(`- ${project.title} (${project.year}): ${project.description}`);
    });
    
    console.log("\nCertifications:");
    certifications.forEach(cert => {
        console.log(`- ${cert.title} by ${cert.issuer} (${cert.year})`);
    });
    
    console.log(`\nLanguages: ${languages.join(", ")}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
    
    console.log("\nReferences:");
    references.forEach(ref => {
        console.log(`- ${ref.name}, ${ref.position}, Contact: ${ref.contact}, Email: ${ref.email}${ref.relationship ? `, Relationship: ${ref.relationship}` : ""}`);
    });
    
    console.log(`\nPersonal Statement: ${personalStatement}`);
}

displayProfile();