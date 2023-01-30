
// let getComputerChoice = function() {
  //   const options = ["paper", "scissors", "rock"]
  //   return options[Math.floor(Math.random() * options.length)];
  // }

  // Function to get computers choice

function getComputerChoice() {
  const options = ["paper", "scissors", "rock"]
  return options[Math.floor(Math.random() * options.length)];
}
// console.log(getComputerChoice());

// Function to get players choice
function playerSelection() {
  const selection = prompt("What is your selection? ");
  return selection.toLowerCase();
}
// console.log(playerSelection());

let playerScore = 0
let computerScore = 0
const draw = "Draw! Go again"
const win = "You win!  🏆"
const lose = "Computer wins.."


function playRound(computer, player) {
  computer = getComputerChoice()
  player = playerSelection()
  console.log(`Computer = ${computer} - Player = ${player}`);
  if (computer === player) {
    return draw
  } else if (computer === "paper" && player === "rock") {
    return lose
  } else if (computer === "scissors" && player === "paper") {
    return lose
  } else if (computer === "rock" && player === "scissors") {
    return lose
  }
  else return win
}

for (let i = 0; i < 5; i++) {
  playRound()
  if (playRound() === win) {
    playerScore++
  }
  else if (playRound() === lose) {
    computerScore++
  }
  else
  console.log("yeaboi")
}

// console.log(playRound());
console.log(`Final score is: computer ${computerScore} - player ${playerScore}`);
