// 1. make the function getComputerChoice
// 1-1. make the function getRandomNum that gives a random number of 1,2 or 3
// 1-2. using getRandomNum function inside getComputerChoice, if randomNum===1, return Rock and so on. 

// 2. make the playRound function
// 2-1. first convert both playerSelection and computerSelection to lower case so it is easier to play with them
// 2-2. using nested if statements, generate different message according to the result of the game.
// for instance if PS is rock and CS is scissors, console.log "YOu win! rock beats scissors."
// 2-3. return the message

// 3. Make the game() function
// 3.1 Declare variables for holding playerScore and computerScore
// 3.2 using for loop, call the playRound function 5 times, and increment the score of the winner.
// 3.3 after the 5 round ends, compare the playerScore and computerScore, and announce the winner according to the result.



//1. Making getRandomChoice function

function getRandomNum() {
    return Math.floor(Math.random()*3) + 1;
}

function getRandomChoice() {
    let rand = getRandomNum();
    let result;

    switch(rand){
        case 1:
            result = "Rock";
            break;
        case 2:
            result = "Paper";
            break;
        default:
            result = "Scissors";
    }

    return result;
}



//2. Making the playRound function


function playRound(playerSelection, computerSelection) {
    console.log("Player has " + playerSelection);
    console.log("Computer has " + computerSelection);

    let lowerCasePS = playerSelection.toLowerCase();
    let lowerCaseCS = computerSelection.toLowerCase();
    let resultMessage;

    if (lowerCasePS === "rock") {
        if (lowerCaseCS === "rock")
            resultMessage = "Draw! Both of you have rock.";
        else if (lowerCaseCS === "scissors")
            resultMessage = "You win! Rock beats scissors.";
        else
            resultMessage = "You lose! Paper beats rock.";
    }
    else if (lowerCasePS === "scissors") {
        if (lowerCaseCS === "rock")
            resultMessage = "You lose! Rock beats scissors.";
        else if (lowerCaseCS === "scissors")
            resultMessage = "Draw! Both of you have scissors.";
        else
            resultMessage = "You win! Scissors beat paper.";
    }
    else {
        if (lowerCaseCS === "rock")
            resultMessage = "You win! Paper beats rock.";
        else if (lowerCaseCS === "scissors")
            resultMessage = "You lose! Scissors beat paper.";
        else
            resultMessage = "Draw! Both of you have paper.";
    }

    return resultMessage;
}


//3. Making the game() function

function game() {
    console.log("Let the game start! Rock Paper Scissors!");
    console.log();

    let playerScore = 0;
    let computerScore = 0;

    for (i = 1; i <= 5; i++)
    {
        let playerSelection = getRandomChoice();
        let computerSelection = getRandomChoice();

        let resultMessage = playRound(playerSelection, computerSelection);
        console.log(resultMessage);

        if (resultMessage.includes('win'))
            playerScore++;
        else if (resultMessage.includes('lose'))
            computerScore++;

        console.log("Player " + playerScore + ":" + computerScore + " Computer");


        if (playerScore === 3 || computerScore === 3)
            break;
    }

    if (playerScore > computerScore)
        console.log("Player wins!");
    else if (playerScore < computerScore)
        console.log("Computer wins!");
    else
        console.log("It's a draw!");
}


game();
