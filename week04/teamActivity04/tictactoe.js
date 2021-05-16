const player1 = 'X';
const player2 = 'O';
let playerTemp = player1;
const square = document.querySelector('.section');

function playGame(e) {
  if (e.target.innerHTML == "") {
    e.target.innerHTML = playerTemp;
    if (playerTemp == player1) {
      playerTemp = player2;
    } else {
      playerTemp = player1;
    }
  } else {
    alert('Pick another square');
  }
}

function resetGame() {
  let square = document.querySelector(".section");
  for (let i = 0; i < square.children.length; i++) {
    square.children[i].innerHTML = "";
  }
  playerTemp = player1;
}

square.addEventListener("touchend", playGame);