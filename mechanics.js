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
        console.log("You lose! Computer picked paper")
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        console.log("You win! Computer picked scissors")
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        console.log("You lose! Computer picked scissors")
    }
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        console.log("You win! Computer picked rock")
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        console.log("You lose! Computer picked rock")
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper") {
            console.log("You win! Computer picked paper")
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

playRound();
