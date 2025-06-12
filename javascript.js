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

function playRound(humanChoice, computerChoice) {
    if (numGames === 5) {
        return;
    }
    numGames++;
    const gameLog = document.querySelector(".game-details");
    let outStr = "";
    humanChoice = humanChoice.toLowerCase();
    if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "scissors" && humanChoice == "paper") || (computerChoice == "paper" && humanChoice == "rock")) {
        outStr = "You lose, " + computerChoice + " beats " + humanChoice;
        computerScore++;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")) {
        outStr = "You win, " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else  if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        outStr = "Tie, you both threw " + humanChoice;
    } else {
        outStr = humanChoice + " is not a valid input";
    }
    gameLog.textContent = outStr;
    displayScores(humanScore, computerScore);
    if (numGames === 5) {
        finishGame();
    }
}

function finishGame() {
    const statusSection = document.querySelector("#status");
    let outputStr = "";
    let scoreStr = "Final score:\nComputer - " + computerScore + ", Player - " + humanScore;
    if (humanScore > computerScore) {
        outputStr = "You win!";
    } else if (humanScore < computerScore) {
        outputStr = "You lose.";
    } else {
        outputStr = "You tied.";
    }
    const score = document.createElement("h3");
    score.textContent = scoreStr;
    const output = document.createElement("h4");
    output.textContent = outputStr;
    statusSection.appendChild(score);
    statusSection.appendChild(output);
}

function displayScores(human, computer) {
    const compScore = document.querySelector(".computer-score");
    const playerScore = document.querySelector(".player-score");
    compScore.textContent = "Computer Score: " + computer;
    playerScore.textContent = "Player Score: " + human;
}

// Set up scores
let humanScore = 0;
let computerScore = 0;
let numGames = 0;
displayScores(humanScore, computerScore);

const buttons = Array.from(document.querySelectorAll("button"));
buttons.map((button) => 
    button.addEventListener("click", () => 
        playRound(button.textContent, getComputerChoice())));