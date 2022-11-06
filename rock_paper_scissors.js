function getComputerChoice() {
 const arrayOfMoves = ["rock", "paper", "scissors"];
 const randomIndex = Math.floor(Math.random() * 3);
 return arrayOfMoves[randomIndex];
}

function getUserChoice(counter = 1) {
  const userChoice = prompt("Enter your move: ", "").toLowerCase();
  if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
    return userChoice;
  } else {
    alert("Invalid move. Enter either rock, paper, or scissors to play.");
    return counter === 3 ? alert("Program end.") : getUserChoice(++counter);
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "rock") {
      return "It's a tie. You both played rock.";
    } else if (playerSelection === "paper") {
      return "You win! Paper beats rock."
    } else {
      return "You lose! Rock beats scissors."
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "rock") {
      return "You lose! Paper beats rock.";
    } else if (playerSelection === "paper") {
      return "It's a tie. You both played paper.";
    } else {
      return "You win! Scissors beats paper";
    }
  } else {
    if (playerSelection === "rock") {
      return "You win! Rock beats scissors";
    } else if (playerSelection === "paper") {
      return "You lose! Scissors beats paper";
    } else {
      return "It's a tie";
    }
  }
}

const computerSelection = getComputerChoice();
const playerSelection = getUserChoice();
if (playerSelection !== undefined) {
  console.log(playRound(playerSelection, computerSelection));
}
