// Remove elements

// 1. Select the element that should be removed

let myHeading = document.getElementById("main-heading");

// 2. Remove the element

// myHeading.remove();
myHeading.remove();

// Complex but safer way for old browsers
// myHeading.parentElement.removeChild(myHeading);