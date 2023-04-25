let roundNumber = 5;

function chooseSymbol(selectionNumber)
{
    let symbol = selectionNumber == 1 ? "Rock" : selectionNumber == 2 ? "Paper" : "Scissor";
    return symbol;
}

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

    let result = "";

    if(playerSelection == "rock" && computerSelection == "Scissor")
    {
        result = "Player has won!";
    }
    else if(playerSelection == "rock" && computerSelection == "Paper")
    {
        result = "Computer has won!";
    }
    else if(playerSelection == "paper" && computerSelection == "Rock")
    {
        result = "Player has won!";
    }
    else if(playerSelection == "paper" && computerSelection == "Scissor")
    {
        result = "Computer has won!";
    }
    else if(playerSelection == "scissor" && computerSelection == "Paper")
    {
        result = "Player has won!";
    }
    else if(playerSelection == "scissor" && computerSelection == "Rock")
    {
        result = "Computer has won!";
    }
    else
    {
        result = "Its a tie!";
    }

    return result;
}


function Game()
{
    //starts a loop within the user is asked for a input and it will be checked against
    //the statements and will get back a result

    while(roundNumber > 0)
    {
        playerSelection = prompt("Choose Rock,Paper or Scissor");

        if(typeof(playerSelection) === 'string')
        {
            playerSelection.toLowerCase();
            console.log(playRound(playerSelection,getComputerChoice()));
        }

        roundNumber--;
    }
}

Game();