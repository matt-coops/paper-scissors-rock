function computerPlay() {
    randoNum = Math.floor(Math.random() * 3) +1;
    if(randoNum == 1) {
        return "paper"
    } else if (randoNum == 2) {
        return "scissors"
    } else {
        return "rock"
    }
}

function playerPlay() {
    let hand = prompt("Choose rock, paper or scissors");
    console.log(hand);
    if (hand.toLowerCase() == "rock" || hand.toLowerCase() == "paper" || hand.toLowerCase() == "scissors") {
        return hand;
    } else {
        console.log("Did not choose correctly");
        playerPlay();
    }
}

function playRound(playerSelection, computerSelection) {
    /* playerSelection = playerSelection.toLowerCase() */
    if (playerSelection == computerSelection) {
        return 0       
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Player wins this round - Rock smashes scissors")
        return 1
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Player wins this round - Paper wraps rock")
        return 1
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Player wins this round - Scissors slices paper")
        return 1
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Computer wins this round - Rock smashes scissors")
        return 2
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Computer wins this round - Paper wraps rock")
        return 2
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Computer wins this round - Scissors slices paper")
        return 2
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
            console.log("Point added to Computer's tally. Computer %s, Player %s", compScore, playerScore)
        } else if (result == 1) {
            playerScore++;
            console.log("Point added to Players's tally. Computer %s, Player %s", compScore, playerScore)
            } else {
                console.log("Draw, no points awarded.")
            } 
        }
        console.log(`Player Score: %s. Computer Score: %s.`, playerScore, compScore);
        if (playerScore > compScore) {
            console.log("Player wins the game!") 
        } else if (playerScore < compScore) {
        } else {
            console.log("It's a draw!")
        }
    }

const playerSelection = "";
const computerSelection = "";
game();
