/*
// This is Exercise 1 - The layout the board

window.onload = function () {
  // Getting the game board element
  var board = document.getElementById("board");

  // Getting all the divs inside the board
  var squares = board.getElementsByTagName("div");

  // Looping through and adding the "square" class to each div
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
  }
};
*/


// This Exercise 1 & 2 combined - The layout the board and add X or O on click

window.onload = function () {
    var board = document.getElementById("board");
    var squares = board.getElementsByTagName("div");

    // keep track of the current turn ("X" or "O")
    var turn = "X";

    // track board state for the future exercises
    var boardState = ["", "", "", "", "", "", "", "", ""];

    // looping through all the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");

        // adding a click event listener for each square
        squares[i].addEventListener("click", function () {
            // find this square's index
            var index = Array.prototype.indexOf.call(squares, this);

            // if the square is empty, allow the move
            if (boardState[index] === "") {
                // show the mark
                this.textContent = turn;
                this.classList.add(turn);

                // update game state
                boardState[index] = turn;

                // switch turns
                if (turn === "X") {
                    turn = "O";
                } else {
                    turn = "X";
                }
            }
        });
    }
};
