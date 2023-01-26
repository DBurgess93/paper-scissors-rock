
// let getComputerChoice = function() {
  //   const options = ["paper", "scissors", "rock"]
  //   return options[Math.floor(Math.random() * options.length)];
  // }

  // Function to get computers choice

function getComputerChoice() {
  const options = ["paper", "scissors", "rock"]
  return options[Math.floor(Math.random() * options.length)];
}
console.log(getComputerChoice());

function playerSelection() {
  const selection = prompt("What is your selection? ");
  return selection.toLowerCase();
}

console.log(playerSelection());
