document.addEventListener('DOMContentLoaded', function () {
    const rockBtn = document.getElementById("rock-btn");
    const scissorsBtn = document.getElementById("scissors-btn");
    const paperBtn = document.getElementById("paper-btn");
    const playerChoiceEl = document.getElementById("player-choice");
    const computerChoiceEl = document.getElementById("computer-choice");
    const winningInfoEl = document.getElementById("winning-info");
    const playerScoreEl = document.getElementById("rock-player")
    const computerScoreEl = document.getElementById("rock-comp")
    const playAgain = document.getElementById("again-btn")
    const selectionArray = ["Rock", "Scissors", "Paper"];
    const overlay = document.getElementById("overlay");
    const gameOverText = document.getElementById("game-over-text");

    let playerScore = 0
    let computerScore = 0

    function computerPlay() {
        const computerSelectionIndex = Math.floor(Math.random() * selectionArray.length);
        return selectionArray[computerSelectionIndex];
    }

    function resetGame() {
        if (playerScore === 5) {
            gameOverText.innerHTML = `<h1> You win the game! </h1>`
            overlay.style.display = "flex"

        } else if (computerScore === 5) {
            gameOverText.innerHTML = `<h1> Sorry, computer wins the game! </h1>`
            overlay.style.display = "flex"

        }
    }

    function game(playerSelection) {
        const computerSelection = computerPlay();

        playerChoiceEl.textContent = "You: " + playerSelection;

        computerChoiceEl.textContent = "Computer: " + computerSelection;

        if (playerSelection === computerSelection) {
            winningInfoEl.textContent = "It's a tie!";
        } else if (
            (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper')
        ) {
            winningInfoEl.textContent = "You win!";
            playerScore++
            playerScoreEl.textContent = "Player: " + playerScore
        } else {
            winningInfoEl.textContent = "Computer wins!";
            computerScore++
            computerScoreEl.textContent = "Computer: " + computerScore
        }

        resetGame()
        
    }


    playAgain.addEventListener("click", function () {
        window.location.reload();
    });


    rockBtn.addEventListener("click", function () {

        rockBtn.classList.add("btn-animate")
        rockBtn.classList.add("btn-background")

        playerChoiceEl.style.opacity = 0
        computerChoiceEl.style.opacity = 0


        setTimeout(function () {
            game("Rock")

            playerChoiceEl.style.transition = "opacity 0.5s ease-in-out"
            playerChoiceEl.style.opacity = 1

            computerChoiceEl.style.transition = "opacity 0.5s ease-in-out"
            computerChoiceEl.style.opacity = 1


            rockBtn.classList.remove("btn-animate")
            rockBtn.classList.remove("btn-background")
        }, 600)

    });

    scissorsBtn.addEventListener("click", function () {

        scissorsBtn.classList.add("btn-animate");
        scissorsBtn.classList.add("btn-background");


        playerChoiceEl.style.opacity = 0;
        computerChoiceEl.style.opacity = 0

        setTimeout(function () {
            game("Scissors")


            playerChoiceEl.style.transition = "opacity 0.5s ease-in-out";
            playerChoiceEl.style.opacity = 1;

            computerChoiceEl.style.transition = "opacity 0.5s ease-in-out"
            computerChoiceEl.style.opacity = 1


            scissorsBtn.classList.remove("btn-animate");
            scissorsBtn.classList.remove("btn-background");
        }, 600);
    });



    //paper btn onclick
    paperBtn.addEventListener("click", function () {
        paperBtn.classList.add("btn-animate")
        paperBtn.classList.add("btn-background")

        playerChoiceEl.style.opacity = 0
        computerChoiceEl.style.opacity = 0

        setTimeout(function () {
            game("Paper")

            playerChoiceEl.style.transition = "opacity 0.5s ease-in-out"
            playerChoiceEl.style.opacity = 1

            computerChoiceEl.style.transition = "opacity 0.5s ease-in-out"
            computerChoiceEl.style.opacity = 1

            paperBtn.classList.remove("btn-animate")
            paperBtn.classList.remove("btn-background")

        }, 600)
    });





});