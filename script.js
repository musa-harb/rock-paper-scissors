"use strict";

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const result = document.querySelector('#round-result');
const score = document.querySelector('#score-final');
let playerScore = 0;
let computerScore = 0;
let numRounds = 0;


//getComputerChoice returns rock, paper,or scissors as a string
//based on a randomly generated number in 0 to 2 range.
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNum];
}

//getPlayerChoice prompt the user to enter one of the three choices
//rock, paper, or scissors and returns the user's choice. If the 
//user enters a different string other than the 3 choices, it prompt
//the user again until the user enters one of the 3 valid choices 
function getPlayerChoice() {
    let userChoice = '';
    while (userChoice !== 'paper' && userChoice !== 'rock' && userChoice !== 'scissors') {
        userChoice = (prompt("Please make a choice, Rock, Paper, or Scissors")).toLowerCase();
    }
    return userChoice;
}

//playRound() function takes the playerSelection and computerSelection
//and returns an array of strings that indicates the winner based on the value of
//the playerSelection and computerSelection.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return [`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ` +
            `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`, 'player'];

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return [`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ` +
            `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`, 'player'];

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return [`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ` +
            `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`, 'player'];
    } else if (playerSelection === computerSelection) {
        return ["It's a tie!", '']
    } else {
        return [`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ` +
            `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`, 'computer'];
    }
}
//calcScore takes the round winner as a string
//and increment the score of who won the round
function calcScore(roundWinner) {
    if (roundWinner === 'player') {
        playerScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
    }
}

//displayScore displays the overall score and
//the final score when either the player or 
// the computer reach 5 points
function displayScore() {
    if (playerScore === 5 || computerScore === 5) {

        playerScore === 5 ? score.textContent = `You won ${playerScore} to ${computerScore}` :
            score.textContent = `You Lost the game, computer wins ${computerScore} to ${playerScore}`;
        resetGame();
    } else {
        score.textContent = `Round ${numRounds}: player ${playerScore} - computer ${computerScore}`;
    }
}

//resetGame resets the player and computer's
//scores and number of rounds played.
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    numRounds = 0;
}


rockBtn.addEventListener('click', (e) => {
    const computerSelection = getComputerChoice();
    const [roundResult, roundWinner] = playRound('rock', computerSelection);
    result.textContent = roundResult;
    calcScore(roundWinner);
    numRounds++;
    displayScore();
});

paperBtn.addEventListener('click', () => {

    const computerSelection = getComputerChoice();
    const [roundResult, roundWinner] = playRound('paper', computerSelection);
    result.textContent = roundResult;
    calcScore(roundWinner);
    numRounds++;
    displayScore();
});

scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const [roundResult, roundWinner] = playRound('scissors', computerSelection);
    result.textContent = roundResult;
    calcScore(roundWinner);
    numRounds++;
    displayScore();
});



//game();
