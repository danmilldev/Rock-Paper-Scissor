let roundNumber = 5;
let playerScore = 0;
let computerScore = 0;

let resultElement = document.getElementById("resultElement");


function chooseSymbol(selectionNumber)
{
    //if the random number is 1 it returns "rock" if 2 returns "paper" if 3 returns "scissor"
    let symbol = selectionNumber == 1 ? "Rock" : selectionNumber == 2 ? "Paper" : "Scissor";
    return symbol;
}

//will get a random number stored into choiceNumber
//and returns the choice as a string decided with the chooseSymbol() Function
function getComputerChoice() 
{
    let choice = "";

    choiceNumber = Math.floor(Math.random() * (4 - 1) + 1);

    choice = chooseSymbol(choiceNumber);

    return choice;
}

function playRound(playerSelection,computerSelection)
{
    //it should let the player choose a symbol
    //then it checks the playersymbol against the computer one
    //and returns if the player wins or not

    //the result variable to store the game result in it

    let currentResult = "";

    if(playerSelection == "rock" && computerSelection == "Scissor")
    {
        playerScore += 1;
    }
    else if(playerSelection == "rock" && computerSelection == "Paper")
    {
        computerScore += 1;
    }
    else if(playerSelection == "paper" && computerSelection == "Rock")
    {
        playerScore += 1;
    }
    else if(playerSelection == "paper" && computerSelection == "Scissor")
    {
        computerScore += 1;
    }
    else if(playerSelection == "scissor" && computerSelection == "Paper")
    {
        playerScore += 1;
    }
    else if(playerSelection == "scissor" && computerSelection == "Rock")
    {
        computerScore += 1;
    }
    else
    {
        result = "Its a tie!";
    }

    currentResult = playerScore.toString() + " : " + computerScore.toString();

    return currentResult;
}


function Game()
{
    //starts a loop within the user is asked for a input and it will be checked against
    //the statements and will get back a result

    while(playerScore < 5 && computerScore < 5)
    {
            playerSelection = prompt("Choose Rock,Paper or Scissor");

            if(typeof(playerSelection) === 'string')
            {
                playerSelection.toLowerCase();
                console.log(playRound(playerSelection,getComputerChoice()));
            }
            else
            {
                break;
            }
    }

    let result = playerScore > 5 ? "Player Won" : "Computer won";
    console.log(result);
}

Game();