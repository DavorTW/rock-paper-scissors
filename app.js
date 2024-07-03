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

function showResult(text){
    const div = document.querySelector(".results");
    const result = document.createElement("p");
    result.setAttribute("class", "results");
    result.textContent = text;
    div.appendChild(result);
}

function showScores(text1, text2){
    const div = document.querySelector(".results");
    const hScore = document.createElement("p");
    const cScore = document.createElement("p");

    hScore.setAttribute("class", "results");
    hScore.textContent = `${text1} ${humanScore}`;
    div.appendChild(hScore);

    cScore.classList.add("results");
    cScore.textContent = `${text2} ${computerScore}`;
    div.appendChild(cScore);
}

function showWinner(string){
    const div = document.querySelector(".results");
    const para = document.createElement("p");
    para.classList.add("results");
    para.textContent = string;
    div.appendChild(para);
    computerScore = 0;
    humanScore = 0;
}

function checkScore(computerScore, humanScore){
    if (computerScore > humanScore && computerScore === 5) {
        showWinner("You Lose!")
    }else if (computerScore < humanScore && humanScore === 5) {
        showWinner("You Win!");
    }
}

function clearScreen() {
    const div = document.querySelector(".results");
    if (div.childElementCount > 0) {
        div.textContent = '';
    }
}

function playRound(computerChoice, humanChoice){
    if(computerChoice === "rock"){
        if(humanChoice === "paper"){
            clearScreen();
            humanScore++;
            showResult("You win! Paper beats rock!");
            showScores("Human score is: ", "Computer score is: ");
            checkScore(computerScore, humanScore);
        }else if(humanChoice === "scissor"){
            clearScreen();
            computerScore++;
            showResult("You Lose! Rock beats scissor!");
            showScores("Human score is: ", "Computer score is: ");
            checkScore(computerScore, humanScore);
        }else{
            clearScreen();
            showResult("It's a tie, try again");
            showScores("Human score is: ", "Computer score is: ");
            checkScore(computerScore, humanScore);
        }
    }
    else if(computerChoice === "paper"){
        if(humanChoice === "paper"){
            clearScreen();
            showResult("It's a tie, try again.");
            showScores("Human score is: ", "Computer score is: ");
            checkScore(computerScore, humanScore);
        }else if(humanChoice === "scissor"){
            clearScreen();
            humanScore++;
            showResult("Youw Win! Scissor beats paper");
            showScores("Human score is: ", "Computer score is: ");
            checkScore(computerScore, humanScore);
        }else{
            clearScreen();
            computerScore++;
            showResult("You lose! Paper beats rock");
            showScores("Human score is: ", "Computer score is: ");
            checkScore(computerScore, humanScore);
        }
    }else{
        if(humanChoice === "paper"){
            clearScreen();
            computerScore++
            showResult("You lose! Scissor beats paper");
            showScores("Human score is: ", "Computer score is: ");
            checkScore(computerScore, humanScore);
        }else if(humanChoice === "scissor"){
            clearScreen();
            showResult("It's a tie! try again");
            showScores("Human score is: ", "Computer score is: ");
            checkScore(computerScore, humanScore);
        }else{
            clearScreen();
            humanScore++
            showResult("You win! Rock beats scissor");
            showScores("Human score is: ", "Computer score is: ");
            checkScore(computerScore, humanScore);
        }
    }
}

