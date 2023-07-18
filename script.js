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
      // Define the winning combinations
      const winCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7] // Diagonals
      ];

      // Check if any winning combination is present on the board
      for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (cells[a - 1].textContent !== "" &&
            cells[a - 1].textContent === cells[b - 1].textContent &&
            cells[a - 1].textContent === cells[c - 1].textContent) {
          return true; // Winning combination found
        }
      }

      return false; // No winning combination
    }

    // Function to check for a draw condition
    function checkDraw() {
      for (const cell of cells) {
        if (cell.textContent === "") {
          return false; // Empty cell found, game still in progress
        }
      }
      return true; // All cells filled, game is a draw
    }
  }
});
