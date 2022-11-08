function getComputerChoice() {
 const arrayOfMoves = ["rock", "paper", "scissors"];
 const randomIndex = Math.floor(Math.random() * 3);

 return arrayOfMoves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "rock") {
      div.textContent = "It's a tie. You both played rock.";
      return "tie";
    } else if (playerSelection === "paper") {
      div.textContent = "You win! Paper beats rock.";
      return "win";
    } else {
      div.textContent = "You lose! Rock beats scissors.";
      return "lose";
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "rock") {
      div.textContent = "You lose! Paper beats rock.";
      return "lose";
    } else if (playerSelection === "paper") {
      div.textContent = "It's a tie. You both played paper.";
      return "tie";
    } else {
      div.textContent = "You win! Scissors beats paper.";
      return "win";
    }
  } else {
    if (playerSelection === "rock") {
      div.textContent = "You win! Rock beats scissors.";
      return "win";
    } else if (playerSelection === "paper") {
      div.textContent = "You lose! Scissors beats paper.";
      return "lose";
    } else {
      div.textContent = "It's a tie. You both played scissors.";
      return "tie";
    }
  }
}

function getGameResults(playerScore, computerScore) {
  if (computerScore > playerScore) {
    return `You lose! Computer beat you ${computerScore} to ${playerScore}.`;
  } else if (playerScore > computerScore) {
    return `You win! You beat computer ${playerScore} to ${computerScore}.`;
  } else {
    return `It's a tie! You both scored ${playerScore} points.`;
  }
}

function playGame(e) {
  let playerScore = 0;
  let computerScore = 0;
  
  // for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;
    const result = playRound(playerSelection, computerSelection);

    if (result === "win") {
      playerScore += 1;
    } else if (result === "lose") {
      computerScore += 1;
    }
  // }

  return getGameResults(playerScore, computerScore);
}

const div = document.querySelector("div");

const computerSelection = getComputerChoice();

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', (e) => playRound(e.target.id, computerSelection)));