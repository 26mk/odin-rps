function getComputerChoice() {
  let randChoice = Math.floor(Math.random() * 3);
  if (randChoice === 0) {
    return "Rock";
  } else if (randChoice === 1) {
    return "Paper";
  }
  return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionUpper = playerSelection.toUpperCase();
  if (playerSelectionUpper == "ROCK") {
    if (computerSelection == "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection == "Scissors") {
      return "You Win! Rock beats Scissors";
    } else return "Tie!";
  } else if (playerSelectionUpper == "PAPER") {
    if (computerSelection == "Rock") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection == "Scissors") {
      return "You Lose! Scissors beats Paper";
    } else return "Tie!";
  } else if (playerSelectionUpper == "SCISSORS") {
    if (computerSelection == "Paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection == "Rock") {
      return "You Lose! Rock beats Scissors";
    } else return "Tie!";
  }
  return "Invalid choice!";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?");
    let computerSelection = getComputerChoice();
    let roundResults = playRound(playerSelection, computerSelection);
    console.log(roundResults);
    if (roundResults.startsWith("You Win")) {
      playerScore++;
    } else if (roundResults.startsWith("You Lose")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(`You Win! You won ${playerScore} out of 5 games`);
  } else if (computerScore > playerScore) {
    console.log(`You Lose! You won ${playerScore} out of 5 games`);
  } else console.log("Tie!");
}

game();
