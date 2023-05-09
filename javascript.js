"use strict";
// activiy box (game prefix), images instead of buttons, score box, winning message, nice page

const btnSelection = document.querySelector(".selection");
const containerScores = document.querySelector(".scores");
const containerConsole = document.querySelector(".console");
const scorePlayer = document.querySelector(".player-score");
const scoreComputer = document.querySelector(".computer-score");
const containerPlayerSelection = document.querySelector(
  ".player--selection--history"
);
const containerComputerSelection = document.querySelector(
  ".computer--selection--history"
);

// containerResults.textContent = "hello";

let playerScore = 0;
let compScore = 0;
let console = "";

function computerPlay() {
  const randoNum = Math.floor(Math.random() * 3) + 1;
  return randoNum;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === 1 && computerSelection === 3) {
    console =
      "Computer chooses rock - Paper wraps rock - Player wins this round.";
    containerConsole.textContent = console;
    return 1;
  } else if (playerSelection === 2 && computerSelection === 1) {
    console =
      "Computer chooses paper - Scissors slice paper - Player wins this round.";
    containerConsole.textContent = console;
    return 1;
  } else if (playerSelection === 3 && computerSelection === 2) {
    console =
      "Computer chooses scissors - Rock smashes scissors - Player wins this round.";
    containerConsole.textContent = console;
    return 1;
  } else if (playerSelection === 1 && computerSelection === 2) {
    console =
      "Computer chooses scissors  - Scissors slice paper - Computer wins this round.";
    containerConsole.textContent = console;
    return 2;
  } else if (playerSelection === 2 && computerSelection === 3) {
    console =
      "Computer chooses rock - Rock smashes scissors - Computer wins this round.";
    containerConsole.textContent = console;
    return 2;
  } else if (playerSelection === 3 && computerSelection === 1) {
    console =
      "Computer chooses paper - Paper wraps rock - Computer wins this round.";
    containerConsole.textContent = console;
    return 2;
  }
}

function game(selection) {
  const computerSelection = computerPlay();
  const playerSelection = selection;
  let result = playRound(playerSelection, computerSelection);
  if (result === 2) {
    compScore++;
    scoreComputer.textContent = `Computer: ${compScore}`;
    scorePlayer.textContent = `Player: ${playerScore}`;
    // containerComputerSelection.
  } else if (result === 1) {
    playerScore++;
    scoreComputer.textContent = `Computer: ${compScore}`;
    scorePlayer.textContent = `Player: ${playerScore}`;
  } else {
    console = "Draw, no points awarded.";
    containerConsole.textContent = console;
    scoreComputer.textContent = `Computer: ${compScore}`;
    scorePlayer.textContent = `Player: ${playerScore}`;
  }

  if (playerScore >= 5) {
    console = "";
    console = "Player wins the game!";
    containerConsole.textContent = console;
    playerScore = 0;
    compScore = 0;
  } else if (compScore >= 5) {
    console = "";
    console = "Computer wins the game!";
    containerConsole.textContent = console;
    playerScore = 0;
    compScore = 0;
  }
}

btnSelection.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn--scissors")) game(1);
  if (e.target.classList.contains("btn--paper")) game(2);
  if (e.target.classList.contains("btn--rock")) game(3);
});
