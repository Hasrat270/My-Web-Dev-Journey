// Tic, Tac, Toe

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    { 
        name: "", 
        symbol: "X" 
    }, 
    {
        name: "",
        symbol: "O"
    },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const activePlayerNameElement = document.getElementById("active-player-name");

const editPlayer1Btn = document.getElementById("edit-player-1");
const editPlayer2Btn = document.getElementById("edit-player-2");
const cancelConfigBtn = document.getElementById("cancel-config-btn");
const startNewGameBtn = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
// const gameFieldsElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
const gameOverElement = document.getElementById("game-over");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);
cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
startNewGameBtn.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldsElements) {
//     gameFieldElement.addEventListener("click", selectGameField);

// };
gameBoardElement.addEventListener("click", selectGameField); 