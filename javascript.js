function getComputerChoice() {
    var num = Math.random();
    if (num < (1/3)) {
        return "rock";
    } else if (num < (2/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("rock, paper, or scissors?: ");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "rock")) {
            console.log("You lose, " + computerChoice + " beats " + humanChoice);
            computerScore++;
        } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
            console.log("You win, " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else  if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
            console.log("Tie, you both threw " + humanChoice);
        } else {
            console.log(humanChoice + " is not a valid input");
        }
    }


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Final score:\nComputer: " + computerScore + "\nPlayer: " + humanScore);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose.");
    } else {
        console.log("You tied.");
    }
}

playGame();