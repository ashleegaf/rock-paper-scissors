function getComputerChoice() {
 const arrayOfMoves = ["rock", "paper", "scissors"];
 const randomIndex = Math.floor(Math.random() * 3);

 return arrayOfMoves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "rock") {
      div.textContent = "It's a tie. You both played rock.";
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
    }
  }
}

function getGameResults(playerScore, computerScore) {
  if (computerScore > playerScore) {
    div.textContent = `You lose! Computer beat you ${computerScore} to ${playerScore}.`;
  } else if (playerScore > computerScore) {
    div.textContent = `You win! You beat computer ${playerScore} to ${computerScore}.`;
  } /* else {
    return `It's a tie! You both scored ${playerScore} points.`;
  } */
}

function createRoundResults() {
  let playerScore = 0;
  let computerScore = 0;

  return (result) => {
    if (playerScore === 5 || computerScore === 5) {
      getGameResults(playerScore, computerScore);
    } else {
      if (result === "win") {
        playerScore += 1;
        console.log('ps: ', playerScore);
      } else if (result === "lose") {
        computerScore += 1;
        console.log('cs: ', computerScore);
      }  
    }
    
    const playerScoreNode = document.querySelector("#player-score");
    const computerScoreNode = document.querySelector("#computer-score");
    playerScoreNode.textContent = `Player Score: ${playerScore}`;
    computerScoreNode.textContent = `Computer Score: ${computerScore}`;
  }
}

function playGame(e) {
  const computerSelection = getComputerChoice();
  const playerSelection = e.target.id;
  const result = playRound(playerSelection, computerSelection);
  getRoundResults(result);
}

const getRoundResults = createRoundResults();

const div = document.querySelector("div");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', playGame));