"use strict";

let secretNumber = Math.trunc(Math.random() * 21);

let highScore = 0;

let score = 20;

//function to display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

//adding actions to again button
document.querySelector(".again").addEventListener("click", function () {
  //resetting the secret number
  secretNumber = Math.trunc(Math.random() * 21);

  //reseting the message
  displayMessage("Start guessing...");

  document.querySelector(".number").textContent = "?";

  //reseting the score
  score = 20;

  displayScore(score);

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  //resetting the guess checkbox to empty
  document.querySelector(".guess").value = "";
});

//checking the number entered is correct or not
document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);

  // if there is no input in the box

  if (!guessedNumber) {
    displayMessage("No number");
  }
  // correct input
  else if (guessedNumber === secretNumber) {
    displayMessage("Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "20rem";

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector(".highscore").textContent = highScore;
  }
  //when input is wrong
  else if (guessedNumber != secretNumber) {
    if (score > 0) {
      guessedNumber > secretNumber
        ? displayMessage("Too High")
        : displayMessage("Too Low");

      score--;

      displayScore(score);
    } else {
      displayMessage("Game Over!!!");
    }
  }
});
