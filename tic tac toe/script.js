let board = Array(9).fill(null);
let currentPlayer = "X";
let gameOver = false;

function play(index) {
  if (gameOver || board[index]) {
    return;
  }

  board[index] = currentPlayer;
  document.getElementsByClassName("cell")[index].innerHTML = currentPlayer;

  if (checkWin()) {
    document.getElementById("result").innerHTML = "Player " + currentPlayer + " wins!";
    gameOver = true;
    return;
  }

  if (checkDraw()) {
    document.getElementById("result").innerHTML = "It's a draw!";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return board.every(cell => cell !== null);
}

function reset() {
  board = Array(9).fill(null);
  currentPlayer = "X";
  gameOver = false;

  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}