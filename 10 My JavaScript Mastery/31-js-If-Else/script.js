const myName = "Hasrat Afridi";
const greetingElement = document.createElement("p");

if (myName == "Hasrat Afridi") {
    greetingElement.textContent = ("Hello, Hasrat Afridi!");
} else {
    greetingElement.textContent = ("Hello, Guest!");
}

document.body.appendChild(greetingElement);

let isLoggedIn = true;

if (!isLoggedIn) {
    console.log("User is NOT logged in");
}