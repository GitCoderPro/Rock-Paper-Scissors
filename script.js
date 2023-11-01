const randomChoice = Math.floor(Math.random() * 3)

const getComputerChoice = () => {
  if (randomChoice === 0) {
    return "Rock".toLowerCase()
  } else if (randomChoice === 1) {
    return "Paper".toLowerCase()
  } else {
    return "Scissors".toLowerCase()
  }
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Tie"
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock."
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors."
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors."
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper."
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock."
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper."
  } else {
    return "You need to type either rock, paper or scissors"
  }
}

const mySelection = prompt("Pick rock, paper or scissors").toLowerCase()
const computerSelection = getComputerChoice()

console.log(`The computer picked ${computerSelection}`)
console.log(playRound(mySelection, computerSelection))

document.getElementById("computer").innerHTML = `The computer picked ${computerSelection}`
document.getElementById("result").innerHTML = playRound(mySelection, computerSelection)