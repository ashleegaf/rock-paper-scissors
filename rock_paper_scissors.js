function getComputerChoice() {
 const arrayOfMoves = ["rock", "paper", "scissors"];
 const randomIndex = Math.floor(Math.random() * 3);

 return arrayOfMoves[randomIndex];
}

function getPlayerChoice(counter = 1) {
  const playerChoice = prompt("Enter your move: ", "").toLowerCase();

  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    return playerChoice;
  } else {
    alert("Invalid move. Enter either rock, paper, or scissors to play.");
    return counter === 3 ? alert("Program end.") : getPlayerChoice(++counter);
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "rock") {
      console.log("It's a tie. You both played rock.");
      return "tie";
    } else if (playerSelection === "paper") {
      console.log("You win! Paper beats rock.");
      return "win";
    } else {
      console.log("You lose! Rock beats scissors.");
      return "lose";
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "rock") {
      console.log("You lose! Paper beats rock.");
      return "lose";
    } else if (playerSelection === "paper") {
      console.log("It's a tie. You both played paper.");
      return "tie";
    } else {
      console.log("You win! Scissors beats paper.");
      return "win";
    }
  } else {
    if (playerSelection === "rock") {
      console.log("You win! Rock beats scissors.");
      return "win";
    } else if (playerSelection === "paper") {
      console.log("You lose! Scissors beats paper.");
      return "lose";
    } else {
      console.log("It's a tie. You both played scissors.");
      return "tie";
    }
  }
}

function gameResults(playerScore, computerScore) {
  if (computerScore > playerScore) {
    return `You lose! Computer beat you ${computerScore} to ${playerScore}.`;
  } else if (playerScore > computerScore) {
    return `You win! You beat computer ${playerScore} to ${computerScore}.`;
  } else {
    return `It's a tie! You both scored ${playerScore} points.`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result === "win") {
      playerScore += 1;
    } else if (result === "lose") {
      computerScore += 1;
    }
  }

  return gameResults(playerScore, computerScore);
}

console.log(game());