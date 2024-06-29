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

let humanScore = 0;
let computerScore = 0;

//human choice
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "rock":
                playRound(getComputerChoice(), "rock");
                break;
            case "paper":
                playRound(getComputerChoice(), "paper");
                break;
            case "scissor":
                playRound(getComputerChoice(), "scissor");
                break;
            default:
                break;
        }
    });
    
})


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




// if (computerScore > humanScore) {
//     console.log("Computer wins!")
// }else if (computerScore < humanScore ) {
//     console.log("You win!!")
// }else{
//     console.log("It's a tie");
// }