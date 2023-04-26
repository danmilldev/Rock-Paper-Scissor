let playerScore = 0;
let computerScore = 0;

function chooseSymbol(selectionNumber)
{

    if(selectionNumber > 3 || selectionNumber < 1)
    {
        return "not a symbol";
    }
    else if(typeof(selectionNumber) !== 'number')
    {
        throw new TypeError();
    }

    //if the random number is 1 it returns "rock" if 2 returns "paper" if 3 returns "scissor"
    let symbol = selectionNumber == 1 ? "Rock" : selectionNumber == 2 ? "Paper" : "Scissor";

    return symbol;
}

//will get a random number stored into choiceNumber
//and returns the choice as a string decided with the chooseSymbol() Function
function getComputerChoice() 
{
    let choice = "";

    let choiceNumber = Math.floor(Math.random() * (4) + 1);

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
    else if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
    {
        console.log("its a tie");
    }
    else
    {
        console.log("its not a symbol!!!");
    }

    currentResult = playerScore.toString() + " : " + computerScore.toString();

    return currentResult;
}

//made default parameter so it can be tested 
function getWinner(player = 0, computer = 0)
{
    let result = "";

    if(playerScore >= 5 || player != 0)
    {
        result = "Player Won";
    }
    else if(computerScore >= 5 || computer != 0)
    {
        result = "Computer Won";
    }

    return result;
}


function game()
{
    //starts a loop within the user is asked for a input and it will be checked against
    //the statements and will get back a result

    while(playerScore < 5 && computerScore < 5)
    {
            let playerSelection = prompt("Choose Rock,Paper or Scissor");

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

    console.log(getWinner());
}

export { game }

export default { chooseSymbol, getWinner }

