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
        return [`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats `+
        `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`,'player'];

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return [`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats `+
        `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`,'player'];

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return [`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats `+
        `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`,'player'];
    } else if (playerSelection === computerSelection) {
        return ["It's a tie!",'']
    } else {
        return [`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats `+
        `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`,'computer'];
    }
}

//game() function runs the game for 5 rounds and log the result of
//each round and the final result of the game after 5 rounds.
function game(){
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i<5;i++){
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        let roundResults = playRound(playerSelection, computerSelection);
        console.log(roundResults[0]);
        if(roundResults[1] === 'player'){
            playerScore++;
        } else if(roundResults[1] == 'computer'){
            computerScore++;
        }
    }
    if(playerScore > computerScore){
        console.log('You won!')
    }else if(computerScore > playerScore){
        console.log('You lost!');
    }else{
        console.log('It is a tie!');
    }
}


game();
