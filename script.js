// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get the required elements from the DOM
  const submitButton = document.getElementById("submit");
  const message = document.querySelector(".message");
  const cells = document.querySelectorAll(".cell");

  // Add event listener to the submit button
  submitButton.addEventListener("click", startGame);

  // Function to handle game start
  function startGame() {
    // Get the player names from the input fields
    const player1Name = document.getElementById("player-1").value;
    const player2Name = document.getElementById("player-2").value;

    // Hide the player input and show the game board
    document.getElementById("player-input").style.display = "none";
    document.getElementById("game-board").style.display = "block";

    // Initialize the game state and active player
    let gameActive = true;
    let activePlayer = 1;
    message.textContent = `${player1Name}, you're up!`;

    // Add event listener to each cell
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        // Check if the cell is empty and the game is active
        if (cell.textContent === "" && gameActive) {
          // Assign the current player's symbol to the cell
          cell.textContent = activePlayer === 1 ? "X" : "O";
          // Check for a win condition
          if (checkWin()) {
            message.textContent = `${activePlayer === 1 ? player1Name : player2Name}, congratulations, you won!`;
            gameActive = false;
          } else if (checkDraw()) {
            message.textContent = "It's a draw!";
            gameActive = false;
          } else {
            // Switch the active player
            activePlayer = activePlayer === 1 ? 2 : 1;
            message.textContent = `${activePlayer === 1 ? player1Name : player2Name}, you're up!`;
          }
        }
      });
    });

    // Function to check for a win condition
    function checkWin() {
      // Add your win condition logic here
      return false;
    }

    // Function to check for a draw condition
    function checkDraw() {
      // Add your draw condition logic here
      return false;
    }
  }
});
