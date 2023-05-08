"use strict";
// activiy box (game prefix), images instead of buttons, score box, winning message, nice page

const btnSelection = document.querySelector(".selection");
const containerScores = document.querySelector(".scores");
const containerConsole = document.querySelector(".console");
const scorePlayer = document.querySelector(".player-score");
const scoreComputer = document.querySelector(".computer-score");

// containerResults.textContent = "hello";

let playerScore = 0;
let compScore = 0;
let console = "";

function computerPlay() {
  const randoNum = Math.floor(Math.random() * 3) + 1;
  if (randoNum === 1) {
    return "paper";
  } else if (randoNum === 2) {
    return "scissors";
  } else {
    return "rock";
  }
}

function playerPlay(selection) {
  let hand = selection;
  /* let hand = userResponse.toLowerCase(); */
  if (hand === "rock" || hand === "paper" || hand === "scissors") {
    console = (`Player chooses %s`, hand);
    return hand;
  } else {
    let hand = "";
    console = "You must choose paper, scissors or rock.";
    containerConsole.textContent = console;
    playerPlay();
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 0;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console =
      "Computer chooses rock - Paper wraps rock - Player wins this round.\n";
    containerConsole.textContent = console;
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console =
      "Computer chooses paper - Scissors slice paper - Player wins this round.\n";
    containerConsole.textContent = console;
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console =
      "Computer chooses scissors - Rock smashes scissors - Player wins this round.\n";
    containerConsole.textContent = console;
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console =
      "Computer chooses scissors  - Scissors slice paper - Computer wins this round.\n";
    containerConsole.textContent = console;
    return 2;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console =
      "Computer chooses rock - Rock smashes scissors - Computer wins this round.\n";
    containerConsole.textContent = console;
    return 2;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console =
      "Computer chooses paper - Paper wraps rock - Computer wins this round.\n";
    containerConsole.textContent = console;
    return 2;
  }
}

function game(selection) {
  // loop
  const computerSelection = computerPlay();
  const playerSelection = playerPlay(selection);
  let result = playRound(playerSelection, computerSelection);
  if (result === 2) {
    compScore++;
    scoreComputer.textContent = `Computer: ${compScore}`;
    scorePlayer.textContent = `Player: ${playerScore}`;
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
  //   }

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
  if (e.target.classList.contains("btn--rock")) game("rock");
  if (e.target.classList.contains("btn--scissors")) game("scissors");
  if (e.target.classList.contains("btn--paper")) game("paper");
});
