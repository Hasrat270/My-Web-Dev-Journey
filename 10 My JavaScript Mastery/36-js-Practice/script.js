// Tic, Tac, Toe

let currentPlayer = "X";
const cells = document.querySelectorAll(".cell"); // Selecting all the cells

// Win patterns ke possible combinations (cell index numbers)
const winPatterns = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Col 1
  [1, 4, 7], // Col 2
  [2, 5, 8], // Col 3
  [0, 4, 8], // Diagonal 1
  [2, 4, 6], // Diagonal 2
];

// Win Check function

function checkWin() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      cells[a].textContent !== "" &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  // Agar har cell fill hai aur koi winner nahi hai, to draw hai
  return [...cells].every(cell => cell.textContent !== "");
}

function handleClickOnCell(event) {
  const cell = event.target;

  if (cell.textContent === "") {
    cell.textContent = currentPlayer;

    if (checkWin()) {
      alert(`Player ${currentPlayer} wins!`);
      resetBoard();
      return;
    }
    if (checkDraw()) {
      alert("It's a Draw!");
      resetBoard();
      return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

for (const cell of cells) {
  cell.addEventListener("click", handleClickOnCell);
}

// Board Reset Function
function resetBoard() {
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
}
