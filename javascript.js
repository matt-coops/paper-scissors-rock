function computerPlay() {
    randoNum = Math.floor(Math.random() * 3) +1;
    if(randoNum == 1) {
        return "paper";
    } else if (randoNum == 2) {
        return "scissors";
    } else {
        return "rock";
    }
}

function playerPlay() {
    let hand = prompt("Choose paper, scissors or rock.").toLowerCase();
    /* let hand = userResponse.toLowerCase(); */
    if (hand == "rock" || hand == "paper" || hand == "scissors") {
        console.log(`Player chooses %s`, hand);
        return hand;
    } else {
        let hand = ""
        console.log("You must choose paper, scissors or rock.");
        playerPlay();
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 0;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Computer chooses rock - Paper wraps rock - Player wins this round.");
        return 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Computer chooses paper - Scissors slice paper - Player wins this round.");
        return 1;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Computer chooses scissors - Rock smashes scissors - Player wins this round.")
        return 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Computer chooses scissors  - Scissors slice paper - Computer wins this round.");
        return 2;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Computer chooses rock - Rock smashes scissors - Computer wins this round.");
        return 2;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Computer chooses paper - Paper wraps rock - Computer wins this round.");
        return 2;
  }
}

function game() {
    let playerScore = 0;
    let compScore = 0; 
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
        let result = playRound(playerSelection, computerSelection);
        if  (result == 2) {
            compScore++;
            console.log("Point added to Computer's tally. Computer %s, Player %s", compScore, playerScore);
        } else if (result == 1) {
            playerScore++;
            console.log("Point added to Players's tally. Computer %s, Player %s", compScore, playerScore);
            } else {
                console.log("Draw, no points awarded.");
            } 
        }
        console.log(`Player Score: %s. Computer Score: %s.`, playerScore, compScore);
        if (playerScore > compScore) {
            console.log("Player wins the game!");
        } else if (playerScore < compScore) {
            console.log("Computer wins the game!");
        } else {
            console.log("It's a draw!");
        }
    }

game();
