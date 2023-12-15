let choices = ["Rock", "Paper", "Scissors"];
let computerChoice = choices[(Math.floor(Math.random() * choices.length))];
let playerSelection = prompt("Rock, paper, or scissors?");

console.log(computerChoice);
console.log(playerSelection);

function playRound(playerSelection, computerChoice) {
    let string = playerSelection.toString();
    let lowerCaseSelection = string.toLowerCase();
    if (lowerCaseSelection === "rock" && computerChoice === "Paper") {
        console.log("You lose! Computer picked paper")
    }
    else if (lowerCaseSelection === "rock" && computerChoice === "Scissors") {
        console.log("You win! Computer picked scissors")
    }
    else if (lowerCaseSelection === "rock" && computerChoice === "Rock") {
        console.log("Tie! Computer picked rock")
    }
    else if (lowerCaseSelection === "paper" && computerChoice === "Paper") {
    console.log("Tie! Computer picked paper")
    }
    else if (lowerCaseSelection === "paper" && computerChoice === "Scissors") {
        console.log("You lose! Computer picked scissors")
    }
    else if (lowerCaseSelection === "paper" && computerChoice === "Rock") {
        console.log("You win! Computer picked rock")
    }
    else if (lowerCaseSelection === "scissors" && computerChoice === "Rock") {
        console.log("You lose! Computer picked rock")
    }
    else if (lowerCaseSelection === "scissors" && computerChoice === "Scissors") {
        console.log("Tie! Computer picked rock")
    }
    else if (lowerCaseSelection === "scissors" && computerChoice === "Paper") {
        console.log("You win! Computer picked paper")
    }
    else {
        console.log("Sorry, I don't know what you said. Try 'rock', 'paper', or 'scissors' without punctuation!")
    }
}

playRound(playerSelection, computerChoice);
