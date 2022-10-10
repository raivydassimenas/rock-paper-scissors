const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    return choices[compChoice];
}

let playerScore = 0;
let computerScore = 0;

document.querySelector('.player-score').textContent = playerScore;
document.querySelector('.computer-score').textContent = computerScore;


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', function (e) {
    if (playerScore < 5 && computerScore < 5) {
        const outcome = playRound('rock', getComputerChoice());
        const result = document.createElement('p');
        result.innerText = outcome;
        document.querySelector('.results').appendChild(result);

        if (outcome.startsWith('You win')) {
            playerScore++;
            document.querySelector('.player-score').innerText = playerScore;
        } else if (outcome.startsWith('You lose')) {
            computerScore++;
            document.querySelector('.computer-score').innerText = computerScore;
        }
    } else {
        if (playerScore == 5) {
            document.querySelector('.player-score').classList.add('.red');
        } else {
            document.querySelector('.computer-score').classList.add('.red');
        }
        const winString = document.createElement('p');
        winString.classList.add('.red');
        const winner = playerScore == 5 ? 'You win!' : 'Computer wins!';
        document.querySelector('.results').appendChild(winString);
        rock.removeEventListener('click');
        paper.removeEventListener('click');
        scissors.removeEventListener('click');
    }
});

paper.addEventListener('click', function (e) {
    if (playerScore < 5 && computerScore < 5) {
        const outcome = playRound('paper', getComputerChoice());
        const result = document.createElement('p');
        result.innerText = outcome;
        document.querySelector('.results').appendChild(result);

        if (outcome.startsWith('You win')) {
            playerScore++;
            document.querySelector('.player-score').innerText = playerScore;
        } else if (outcome.startsWith('You lose')) {
            computerScore++;
            document.querySelector('.computer-score').innerText = computerScore;
        }
    } else {
        if (playerScore == 5) {
            document.querySelector('.player-score').classList.add('.red');
        } else {
            document.querySelector('.computer-score').classList.add('.red');
        }
        const winString = document.createElement('p');
        winString.classList.add('.red');
        const winner = playerScore == 5 ? 'You win!' : 'Computer wins!';
        document.querySelector('.results').appendChild(winString);
        rock.removeEventListener('click');
        paper.removeEventListener('click');
        scissors.removeEventListener('click');
    }
});

scissors.addEventListener('click', function (e) {
    if (playerScore < 5 && computerScore < 5) {
        const outcome = playRound('scissors', getComputerChoice());
        const result = document.createElement('p');
        result.innerText = outcome;
        document.querySelector('.results').appendChild(result);

        if (outcome.startsWith('You win')) {
            playerScore++;
            document.querySelector('.player-score').innerText = playerScore;
        } else if (outcome.startsWith('You lose')) {
            computerScore++;
            document.querySelector('.computer-score').innerText = computerScore;
        }
    } else {
        if (playerScore == 5) {
            document.querySelector('.player-score').classList.add('.red');
        } else {
            document.querySelector('.computer-score').classList.add('.red');
        }
        const winString = document.createElement('p');
        winString.classList.add('.red');
        const winner = playerScore == 5 ? 'You win!' : 'Computer wins!';
        document.querySelector('.results').appendChild(winString);
        rock.removeEventListener('click');
        paper.removeEventListener('click');
        scissors.removeEventListener('click');
    }
});

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === playerSelection) {
        return `Draw! Both have ${computerSelection}`;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats scissors";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Paper beats rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! Scissors beat paper";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! Paper beats rock";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win! Scissors beat paper";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! Rock beats scissors";
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Enter your choice").toLowerCase();
        while (!choices.includes(playerChoice)) {
            playerChoice = prompt("Enter your choice").toLowerCase();
        }

        const outcome = playRound(playerChoice, getComputerChoice());

        console.log(outcome);

        if (outcome.startsWith("You win!")) {
            playerScore++;
        } else if (outcome.startsWith("You lose!")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win! Your score is ${playerScore}. Computer's score is ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose! Your score is ${playerScore}. Computer's score is ${computerScore}`);
    } else {
        console.log(`Draw! Both you and computer have ${playerScore}`);
    }
}

// game();