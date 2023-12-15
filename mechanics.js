let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let computerSelection = choices[(Math.floor(Math.random() * choices.length))]
    return computerSelection;
}

function getPlayerChoice () {
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    return playerSelection;
}

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "Paper") {
        console.log("You lose! Computer picked paper");
        let result = -1;
        return result;
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        console.log("You win! Computer picked scissors");
        let result = 1;
        return result;
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        console.log("You lose! Computer picked scissors");
        let result = -1;
        return result;
    }
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        console.log("You win! Computer picked rock")
        let result = 1;
        return result;
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        console.log("You lose! Computer picked rock")
        let result = -1;
        return result;
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper") {
            console.log("You win! Computer picked paper");
            let result = 1;
            return result;
    }
    else if (playerSelection === computerSelection) {
        console.log("Tie! Play again?")
        playRound();
    }
    else {
        console.log("Sorry, I don't know what you said. Try 'rock', 'paper', or 'scissors' without punctuation!")
        playRound();
    }
}

function game() {
    let playerScore = 0;
    for (let i = 0; i = 5; i++) {
        playerScore += playRound();
        console.log(playerScore)
    }
}

game()