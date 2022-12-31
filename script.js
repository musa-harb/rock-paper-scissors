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

console.log(getComputerChoice());
console.log(getPlayerChoice());