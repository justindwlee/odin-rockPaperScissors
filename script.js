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
            result = "rock";
            break;
        case 2:
            result = "paper";
            break;
        default:
            result = "scissors";
    }

    return result;
}



//2. Making the playRound function


function playRound(playerSelection, computerSelection) {
    

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


const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const playResult = document.querySelector('#playResult');
const finalResult = document.querySelector('#finalResult');
const humanChoice = document.querySelector('.humanChoice');
const computerChoice = document.querySelector('.computerChoice');

let plScore = 0;
let cmpScore = 0;

function handleClick(event) {

    const cmpChoice = getRandomChoice();

    humanChoice.textContent = `Player has ${event.target.id}`;
    computerChoice.textContent = `Computer has ${cmpChoice}`;

    const resultMessage = playRound(event.target.id, cmpChoice);

    playResult.textContent = resultMessage;

    if (playResult.textContent.includes('win')) {
        playResult.style.color = 'blue';
        plScore++;
        playerScore.textContent = plScore;
    }
    else if (playResult.textContent.includes('lose')) {
        playResult.style.color = 'red';
        cmpScore++;
        computerScore.textContent = cmpScore;
    }
    else {
        playResult.style.color = 'black';
    }


    if (plScore === 5 || cmpScore === 5) {
        const winner = plScore > cmpScore ? "Player" : "Computer";

        finalResult.textContent = `Game Over! ${winner} wins!`;

        

        buttons.forEach((button) => {
            button.removeEventListener('click', handleClick);
            button.classList.toggle('change-opacity');
        })

        let regameBtn = document.createElement('button');
        regameBtn.textContent = 'Play Again?';
        regameBtn.style.cssText = "background-color:#3B82F6; border: 0; box-shadow: 2px 4px 4px rgba(0,0,0,0.3); color: white; font-size: 15px; font-weight: bold; height: 50px; margin-bottom: 14px;";
        regameBtn.addEventListener('click', function() {
            location.reload();
        })

        document.body.appendChild(regameBtn);
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
})




// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         const resultMessage = playRound(`${button.textContent}`, getRandomChoice());

//         playResult.textContent = resultMessage;

//         if (resultMessage.includes('win')) {
//             plScore++;
//             playerScore.textContent = plScore;
//         }
//         else if (resultMessage.includes('lose')) {
//             cmpScore++;
//             computerScore.textContent = cmpScore;
//         }


//         if (plScore === 5 || cmpScore === 5) {
//             const winner = plScore > cmpScore ? "Player" : "Computer";

//             finalResult.textContent = `Game Over! ${winner} wins!`;
//         }
//     })
// })




