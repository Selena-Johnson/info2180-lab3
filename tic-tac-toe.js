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


// This Exercise 1 - 6 combined

window.onload = function () {
    var board = document.getElementById("board"); // gets the game board element
    var squares = board.getElementsByTagName("div"); // gets all the divs inside the board
    var status = document.getElementById("status"); // gets the status display element
    var newGameBtn = document.querySelector(".btn"); // gets the new game button element
    var gameActive = true; //tracks if the game is active


    // keep tracks of the current turn ( either "X" or "O")
    var turn = "X";

    // track the state of the board for the future exercises
    var boardState = ["", "", "", "", "", "", "", "", ""];

    // looping through all the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");

        //Exercise 3 - adding hover effect
        squares[i].addEventListener("mouseenter", function () {
            if (this.textContent === "") this.classList.add("hover");
        });
        squares[i].addEventListener("mouseleave", function () {
            this.classList.remove("hover");
        });


        // adding a click event listener for each square
        squares[i].addEventListener("click", function () {
            // find this square's index
            var index = Array.prototype.indexOf.call(squares, this);
            // Disallows cheating by clicking on occupied squares or when game is over
            if (boardState[index] !== "" || !gameActive) return;

            // show the mark and update state
            this.textContent = turn;
            this.classList.add(turn);
            boardState[index] = turn;

            // check for winner 
            if (typeof checkWinner === "function" && checkWinner(turn)) {
                status.textContent = "Congratulations! " + turn + " is the Winner!";
                status.classList.add("you-won");
                gameActive = false;
            } else {
                // switch turns
                turn = turn === "X" ? "O" : "X";
                if (status) status.textContent = "Turn: " + turn;
            }
        });
    }

  function checkWinner(player) {
    var combos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    return combos.some(combo => combo.every(i => boardState[i] === player));
  }

    // New game button resets the board
    if (newGameBtn) {
        newGameBtn.addEventListener("click", function () {
            boardState = ["", "", "", "", "", "", "", "", ""];
            for (var j = 0; j < squares.length; j++) {
                squares[j].textContent = "";
                squares[j].classList.remove("X", "O", "hover");
                if (!squares[j].classList.contains("square")) squares[j].classList.add("square");
            }
            if (status) {
                status.textContent = "Turn: X";
                status.classList.remove("you-won");
            }
            gameActive = true;
            turn = "X";
        });
    }
};
