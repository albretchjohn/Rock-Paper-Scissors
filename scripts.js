let humanScore = 0;
let computerScore = 0;
let draw = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice == 1) {
        return "scissors";

    } else if ( choice == 2) {
        return "paper";

    } else {
        return "rock";

    
};
}

function getHumanChoice () {
    let userChoice = prompt("5 rounds of Rock? Paper? Scissors?", "Scissors")
    return userChoice;
    
};

function playRound (humanChoice, computerChoice) {
    console.log(`Computer chose: ${computerChoice}`);
    alert(`Computer chose: ${computerChoice}`)
    console.log(`You chose ${humanChoice}`);
    let userChoices = humanChoice.toLowerCase();



    if (userChoices == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.")
        alert("You lose! Paper beats Rock.");
        computerScore++
    } else if (userChoices == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper.")
        alert("You lose! Scissors beats Paper.");
        computerScore++
    } else if (userChoices == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors.")
        alert("You lose! Rock beats Scissors.");
        computerScore++
    }
    
    else if (userChoices == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.")
        alert("You win! Paper beats Rock.");
        humanScore++
    } else if (userChoices == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper.")
        alert("You win! Scissors beats Paper.");
        humanScore++
    } else if (userChoices == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.")
        alert("You win! Rock beats Scissors..");
        humanScore++
    } 
    else if (userChoices == "rock" && computerChoice == "rock") {
        console.log("TIE! Rock against Rock")
        alert("TIE! Rock against Rock");
        draw++
    } else if (userChoices == "paper" && computerChoice == "paper") {
        console.log("TIE! Paper against Paper")
        alert("TIE! Paper against Paper");
       draw++
    } else if (userChoices == "scissors" && computerChoice == "scissors") {
        console.log("TIE! Scissors against Scissors")
        alert("TIE! Scissors against Scissors");
        draw++
    };
    
};


function playGame () {
    for (let i= 0; i<5; i++) {
        const humanSelection = getHumanChoice ();
        const computerSelection = getComputerChoice ();

        playRound (humanSelection, computerSelection);
    };

    alert (`Your score is ${humanScore}, while computer score is ${computerScore} and you drew ${draw} time/s`);
};

playGame();

