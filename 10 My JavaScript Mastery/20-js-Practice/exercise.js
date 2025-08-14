// Task 1
let myHeading = document.body.children[0];
myHeading.innerHTML = "Good Bye World -  h1 Accessed";

// Task 2
console.log(myHeading.parentElement);
console.log(myHeading.nextElementSibling);

// Task 3
myHeading = document.getElementById("main-heading");
myHeading.innerHTML = "Good Bye World -  h1 Accessed with ID";

// Task 4
let paragraph = document.querySelector(".class-paragraph");
paragraph.innerHTML = "Good Bye World -  p Accessed with Class";

// Task 5
console.dir(paragraph);
paragraph.innerText = "P - Accessed Again";
paragraph.textContent = "Changed by Hasrat Afridi !";