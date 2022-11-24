function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    switch(choice) {
        case choice == 0:
            return "Rock";
        case choice == 1:
            return "Paper";
        case choice == 2:
            return "Scissors";
    }
}

