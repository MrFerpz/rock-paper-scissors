choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    console.log(choices[Math.random() * choices.length])
}

getComputerChoice()