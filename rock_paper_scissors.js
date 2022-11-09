function restartGame() {
  location.reload();
}

function getGameResults(playerScore, computerScore) {
  if (computerScore > playerScore) {
    gameResultDiv.textContent = `Oh no! Computer beat you ${computerScore} to ${playerScore}.`;
  } else {
    gameResultDiv.textContent = `Congrats! You beat computer ${playerScore} to ${computerScore}.`;
  }
  gameResultDiv.style.visibility = "visible";
}

function endGame(playerScore, computerScore) {
  rpsButtons.forEach(button => {
    button.disabled = true;
    button.classList.add("disabled");
  });

  setTimeout(() => getGameResults(playerScore, computerScore), 1000);
  
  setTimeout(() => {
    restartButton.textContent = "RESTART";
    restartButton.style.visibility = "visible";
    restartButton.addEventListener("click", restartGame);
  }, 1000);
}

function createRoundResults() {
  let playerScore = 0;
  let computerScore = 0;

  return (num, result) => {
    const roundCounterDiv = document.querySelector("#round-counter");
    const playerScoreNode = document.querySelector(".player.score");
    const computerScoreNode = document.querySelector(".computer.score");

    if (result === "win") {
      playerScore += 1; 
      playerScoreNode.classList.add("increment");
    } else if (result === "lose") {
      computerScore += 1;
      computerScoreNode.classList.add("increment");
    }
    
    roundCounterDiv.textContent = `Round ${num}`;
    playerScoreNode.textContent = `Player Score: ${playerScore}`;
    computerScoreNode.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 3 || computerScore === 3) endGame(playerScore, computerScore);
  }
}

function createRoundCounter() {
  let counter = 0;

  return () => {
    counter += 1;
    return counter;
  }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("increment");
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "rock") {
      roundResultDiv.textContent = "It's a tie. You both played rock.";
    } else if (playerSelection === "paper") {
      roundResultDiv.textContent = "You win! Paper beats rock.";
      return "win";
    } else {
      roundResultDiv.textContent = "You lose! Rock beats scissors.";
      return "lose";
    }
  } else if (computerSelection === "paper") {
    if (playerSelection === "rock") {
      roundResultDiv.textContent = "You lose! Paper beats rock.";
      return "lose";
    } else if (playerSelection === "paper") {
      roundResultDiv.textContent = "It's a tie. You both played paper.";
    } else {
      roundResultDiv.textContent = "You win! Scissors beats paper.";
      return "win";
    }
  } else {
    if (playerSelection === "rock") {
      roundResultDiv.textContent = "You win! Rock beats scissors.";
      return "win";
    } else if (playerSelection === "paper") {
      roundResultDiv.textContent = "You lose! Scissors beats paper.";
      return "lose";
    } else {
      roundResultDiv.textContent = "It's a tie. You both played scissors.";
    }
  }
}

function getComputerChoice() {
  const arrayOfMoves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
 
  return arrayOfMoves[randomIndex];
 }

function playGame(e) {
  const computerSelection = getComputerChoice();
  const playerSelection = e.target.id;
  const roundNum = incrementRound();
  const roundResult = playRound(playerSelection, computerSelection);
  
  getRoundResults(roundNum, roundResult);
}

const incrementRound = createRoundCounter();
const getRoundResults = createRoundResults();

const roundResultDiv = document.querySelector(".round.result");
const gameResultDiv = document.querySelector(".game.result");
const restartButton = document.querySelector("#restart");

const scoreNodes = document.querySelectorAll('.score');
scoreNodes.forEach(node => node.addEventListener('transitionend', removeTransition));

const rpsButtons = document.querySelectorAll("#rock, #paper, #scissors");
rpsButtons.forEach(button => button.addEventListener('click', playGame));