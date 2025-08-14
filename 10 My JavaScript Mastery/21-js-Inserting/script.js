// Add en element

// 1. Create the new element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://www.google.com";
newAnchorElement.textContent = "Google";
newAnchorElement.style = "text-decoration: none; color: red;";
newAnchorElement.target = "_blank";

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector(".exercise-paragraph");

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);