const field = [
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
];

const cells = document.querySelectorAll(".cell");
const messageDisplay = document.querySelector("#message");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const newGameButton = document.querySelector("#new");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

let player = "x";
let turn = "x turn!";
let scores = {
  x: 0,
  o: 0,
};
const classes = {
  x: "cross",
  o: "zero",
};
let gameOver = false;
let clicks = 0;

init();

function init() {
  fillingCells();
  resetButton.addEventListener("click", resetField);
  newGameButton.addEventListener("click", newGame);
}

function fillingCells() {
  for (let i = 0; i < field.length; i++) {
    cells[i].addEventListener("click", function () {
      playerTurn();
      if (gameOver) {
        alert("Game is already over");
        return;
      }
      if (field[i] !== "empty") {
        alert("Cell is full! Select another cell!");
        return;
      }
      this.classList.add(classes[player]);
      field[i] = player;
      if (
        field[0] === "empty" ||
        field[1] === "empty" ||
        field[2] === "empty" ||
        field[3] === "empty" ||
        field[4] === "empty" ||
        field[5] === "empty" ||
        field[6] === "empty" ||
        field[7] === "empty"
      ) {
        checkLines(player);
        if (player === "x") {
          p1Display.textContent = scores[player];
          turn = "o turn!";
          player = "o";
        } else {
          p2Display.textContent = scores[player];
          turn = "x turn!";
          player = "x";
        }
      } else {
        messageDisplay.textContent = "Draw!!!";
        gameOver = true;
      }
    });
  }
}

function checkLines(player) {
  const lines = [
    [field[0], field[1], field[2]],
    [field[3], field[4], field[5]],
    [field[6], field[7], field[8]],
    [field[0], field[3], field[6]],
    [field[1], field[4], field[7]],
    [field[2], field[5], field[8]],
    [field[0], field[4], field[8]],
    [field[6], field[4], field[2]],
  ];
  for (let i = 0; i < lines.length; i++) {
    if (
      lines[i][0] === player &&
      lines[i][1] === player &&
      lines[i][2] === player
    ) {
      messageDisplay.textContent = player + " won!!!";
      scores[player]++;
      gameOver = true;
    }
  }
}

function resetField() {
  for (let i = 0; i < field.length; i++) {
    field[i] = "empty";
    cells[i].classList = ["cell"];
  }
  gameOver = false;
}

function newGame() {
  resetField();
  player1.value = "";
  player2.value = "";
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  messageDisplay.textContent = "";
  scores["x"] = 0;
  scores["o"] = 0;
}

function playerTurn() {
  messageDisplay.textContent = turn;
}
