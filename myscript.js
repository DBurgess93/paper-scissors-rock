
// Get computer choise
function getComputerChoice() {
  const options = ["paper", "scissors", "rock"]
  return options[Math.floor(Math.random() * options.length)];
}

// Get players choice
function playerSelection() {
  const selection = prompt("What is your selection? ");
  return selection.toLowerCase();
}

function gameWinner() {
  if (playerScore === 5 && playerScore > computerScore)
  alert("You win!")
  else
  alert("You lose!")
}


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


  while (playerScore < 5 && computerScore < 5) {
    playRound();
    console.log(`Player: ${playerScore} vs Computer: ${computerScore} - Round Winner: ${roundWinner}`);
  }

  console.log(`Final Score: Player = ${playerScore} vs Computer = ${computerScore}`);
  gameWinner();
