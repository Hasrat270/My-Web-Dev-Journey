let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
    // let userInput = inputElement.value;
    let userInput = event.target.value;
    // let userInput = event.data; (This Only gives us single entered character)
    console.log(userInput);
    // console.log(event);
}
    

inputElement.addEventListener("input", retrieveUserInput);