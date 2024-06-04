//returns a number between 0 and 2 inclusive
function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

//returns rock paper or scissor
function getComputerChoice(){
    let number = getRandomNumber();
    if (number === 0) {
        return "rock";
    } else if(number === 1) {
        return "paper";
    } else{
        return "scissor";
    }
}

//ask the user to input its choice
function getHumanChoice(){
    return prompt("Choose rock, paper or scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    if(computerChoice === "rock"){
        if(humanChoice === "paper"){
            humanScore++;
            console.log("You win! Paper beats rock!");
            console.log("Your score: ", humanScore);
            console.log("Computer core: ", computerScore);
        }else if(humanChoice === "scissor"){
            computerScore++;
            console.log("You Lose! Rock beats scissor!");
            console.log("Your score: ", humanScore);
            console.log("Computer core: ", computerScore);
        }else{
            console.log("It's a tie, try again");
            console.log("Your score: ", humanScore);
            console.log("Computer core: ", computerScore);
        }
    }
    else if(computerChoice === "paper"){
        if(humanChoice === "paper"){
            console.log("It's a tie, try again");
            console.log("Your score: ", humanScore);
            console.log("Computer core: ", computerScore);
        }else if(humanChoice === "scissor"){
            humanScore++;
            console.log("You Win! Scissor beats paper");
            console.log("Your score: ", humanScore);
            console.log("Computer core: ", computerScore);
        }else{
            computerScore++;
            console.log("You lose! Paper beats rock");
            console.log("Your score: ", humanScore);
            console.log("Computer core: ", computerScore);
        }
    }else{
        if(humanChoice === "paper"){
            computerScore++
            console.log("You lose! Scissor beats paper");
            console.log("Your score: ", humanScore);
            console.log("Computer core: ", computerScore);
        }else if(humanChoice === "scissor"){
            console.log("It's a tie! try again");
            console.log("Your score: ", humanScore);
            console.log("Computer core: ", computerScore);
        }else{
            humanScore++
            console.log("You win! Rock beats scissor");
            console.log("Your score: ", humanScore);
            console.log("Computer core: ", computerScore);
        }
    }
}

function playGame(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    playRound(computerChoice, humanChoice);
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (computerScore > humanScore) {
    console.log("Computer wins!")
}else if (computerScore < humanScore ) {
    console.log("You win!!")
}else{
    console.log("It's a tie");
}