const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;

const generateComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

const updateScores = () => {
  document.getElementById("player-score").innerHTML = `Player: ${playerScore}`;
  document.getElementById("computer-score").innerHTML = `Computer: ${computerScore}`;

  if (playerScore === 5) {
    alert("Congratulations! You've won the game!");
    resetGame();
  } else if (computerScore === 5) {
    alert("The computer has won the game!");
    resetGame();
  }
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  updateScores();
};

const updateGame = (playerSelection) => {
  const computerSelection = generateComputerChoice();
  document.getElementById("computer").innerHTML = `The computer picked ${computerSelection}`;
  const result = playRound(playerSelection, computerSelection);
  document.getElementById("result").innerHTML = result;

  if (result.startsWith("You win")) {
    playerScore++;
  } else if (result.startsWith("You lose")) {
    computerScore++;
  }

  updateScores();
};

rock.addEventListener('click', () => {
  updateGame('rock');
});

paper.addEventListener('click', () => {
  updateGame('paper');
});

scissors.addEventListener('click', () => {
  updateGame('scissors');
});
