function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    
    if (choice==0) {
        return "Rock"
    } else if (choice==1){
        return "Paper"
    } else if (choice==2){
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLocaleLowerCase();

    if ((player == "rock" && computer == "scissors")||(player == "paper" && computer == "rock")||(player == "scissors" && computer == "paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if ((player == "rock" && computer == "paper")||(player == "paper" && computer == "scissors")||(player == "scissors" && computer == "rock")) {
        return `You Lose! ${playerSelection} loses to ${computerSelection}`;

    } else if ((player == "rock" && computer == "rock")||(player == "paper" && computer == "paper")||(player == "scissors" && computer == "scissors")) {
        return `You Draw! ${playerSelection} equals to ${computerSelection}`;

    } else {
        return "Invalid input"
    }

}

function game() {
    let result = '';

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock paper scissors?");
        const computerSelection = getComputerChoice();
        result += playRound(playerSelection, computerSelection) + ". ";

    }

    return result;
}

console.log(game());