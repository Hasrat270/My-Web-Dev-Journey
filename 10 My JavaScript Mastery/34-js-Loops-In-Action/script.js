// Calculate sum up to number
const calculateSumButton = document.querySelector("#calculator button");

function calculateSumUpToNumber() {
  const userNumber = document.getElementById("user-number").value;
  let sum = 0;

  for (let i = 0; i <= userNumber; i++) {
    sum += i;
  }

  const calculatedSum = document.getElementById("calculated-sum");

  calculatedSum.textContent = sum;
  calculatedSum.style.display = "block";
}

calculateSumButton.addEventListener("click", calculateSumUpToNumber);


// Links Highlighting

const highlightLinksButton = document.querySelector("#highlight-links button");
const links = document.querySelectorAll("#highlight-links a");

function highlightTheText() {
    for (const link of links) {
        link.classList.add("highlight");
    }
}

highlightLinksButton.addEventListener("click", highlightTheText);

// for in loop

const DisplayUserDataButton = document.querySelector("#user-data button");
const outputUserDataElement = document.getElementById("output-user-data");

const myObj = {
    name: "Hasrat",
    age: 21,
    job: "Software Engineer",
};

function displayUserData() {
    let userData = "";
    for (const key in myObj)  {
        userData = key.toUpperCase() + ": " + myObj[key]; // Here we are accessing the key and value of the object
        const newItemElement = document.createElement("li"); // Here we are creating a new element
        newItemElement.textContent = userData; // Here we are setting the text content of the new element
        outputUserDataElement.append(newItemElement); // Here we are appending the new element to the outputUserDataElement
    }
}

DisplayUserDataButton.addEventListener("click", displayUserData);
// Here we are adding a click event listener to the DisplayUserDataButton


// Statistics

const rollTheDiceButton = document.querySelector("#statistics button");

function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const diceRollsList = document.getElementById("dice-rolls");
    const enteredNumber = document.getElementById("user-target-number").value;
    diceRollsList.innerHTML = "";

    let hasRolledTargetNumber = false;
    let numberOfDiceRolls = 0;
    
    while (!hasRolledTargetNumber) {
        const rolledNumber = diceRoll();
        numberOfDiceRolls++;
        const newListItem = document.createElement("li");
        const outputText = "Roll " + numberOfDiceRolls + ": " + rolledNumber;
        newListItem.textContent = outputText;
        diceRollsList.append(newListItem);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }
    const outputTotalRollsElement = document.getElementById("output-total-rolls");
    const outputTargetNumberElement = document.getElementById("output-target-number");

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfDiceRolls;
}

rollTheDiceButton.addEventListener("click", deriveNumberOfDiceRolls);