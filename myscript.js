

function getComputerChoice() {
  const options = ["paper", "scissors", "rock"]
  return options[Math.floor(Math.random() * options.length)];
}

// Function to get players choice
function playerSelection() {
  const selection = prompt("What is your selection? ");
  return selection.toLowerCase();
}
// console.log(playerSelection());

let playerScore = 0
let computerScore = 0
let roundWinner = ''


function playRound(computer, player) {
  computer = getComputerChoice()
  player = playerSelection()
  console.log(`Computer: ${computer} - Player: ${player}`);
  if (computer === player) {
    return (roundWinner = "draw")
  } else if (
    (computer === "paper" && player === "rock") ||
    (computer === "scissors" && player === "paper") ||
    (computer === "rock" && player === "scissors")
  )
  {
    return computerScore++ && (roundWinner = "computer")
  }
  else {
  return playerScore++ && (roundWinner = "player") }
}

for (let i = 0; i < 5; i++) {
  playRound()
}

// console.log(playRound());
console.log(`computer ${computerScore} - player ${playerScore}`);

// full re-arrange required
