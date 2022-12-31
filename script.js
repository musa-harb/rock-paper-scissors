"use strict";


//getComputerChoice returns rock, paper,or scissors as a string
//based on a randomly generated number in 0 to 2 range.
function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNum];
}

console.log(getComputerChoice());