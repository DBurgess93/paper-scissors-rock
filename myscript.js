
// Function to get computers choice
function getComputerChoice() {
  const options = ["paper", "scissors", "rock"]
  const selection = options[Math.floor(Math.random()*options.length)];
  return selection
}

console.log(getComputerChoice());
