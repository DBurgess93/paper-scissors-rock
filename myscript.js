
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
const win = "You win!  🏆" && playerScore++
const lose = "Computer wins.." && computerScore++


function playRound(computer, player) {
  computer = getComputerChoice()
  player = playerSelection()
  console.log("Computers selection -- " + computer)
  console.log("Your selection -- " + player)
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

// function game()

console.log(playRound());
console.log("Player: " + playerScore)
console.log("Computer: " + computerScore)
