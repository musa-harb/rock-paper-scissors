"use strict";


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
//and returns a string that indicates the winner based on the value of
//the playerSelection and computerSelection.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats `+
        `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats `+
        `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats `+
        `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats `+
        `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
