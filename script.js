let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
// console.log(player2)
let boxList = document.querySelectorAll('.box');
let turn = 'x';
let isGameOver = false;
let form = document.querySelector('form');


//Function to change the turn
const changeTurn = function () {
  return turn === 'x' ? 'o' : 'x';
};

//Function to check for a win
const checkWin = function () {
  let boxTextList = document.querySelectorAll('.text');
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((element) => {
    if (
      boxTextList[element[0]].innerText !== '' &&
      boxTextList[element[0]].innerText === boxTextList[element[1]].innerText &&
      boxTextList[element[1]].innerText === boxTextList[element[2]].innerText
    ) {
      isGameOver = true;
      boxTextList[element[0]].parentNode.style.backgroundColor = 'purple';
      boxTextList[element[1]].parentNode.style.backgroundColor = 'purple';
      boxTextList[element[2]].parentNode.style.backgroundColor = 'purple';
    }
  });
};

//Main Logic
boxList.forEach((element) => {
  element.addEventListener('click', function () {
    let boxText = this.querySelector('.text');
    if (boxText.innerText === '') {
      boxText.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (isGameOver) {
        const winner = turn === 'o' ? 'player1' : 'player2';
        document.querySelector(
          '.message'
        ).innerText = `${winner}, congratulations you won!`;
      } else {
        const player = turn === 'x' ? 'player1' : 'player2';
        document.querySelector('.message').innerText = `${player}, you\'re up`;
      }
    }
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.style.display = 'none';
  document.querySelector('.game-container').style.display = 'flex';
  let msg = document.querySelector('.message')
  msg.innerText = `${player1.value}, you're up`
  console.log(player2.value)
});