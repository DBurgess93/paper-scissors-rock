
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

function gamePlay(computer, player) {
  computer = getComputerChoice()
  player = playerSelection()
  console.log("Computers selection -- " + computer)
  console.log("Your selection -- " + player)
  if (computer === player) {
    return "Draw! Go again"
  } else if (computer === "paper" && player === "rock") {
    return "Computer wins.."
  } else if (computer === "scissors" && player === "paper") {
    return "Computer wins.."
  } else if (computer === "rock" && player === "scissors") {
    return "Computer wins.."
  }
  else return "You win! 🏆"
}
console.log(gamePlay());
