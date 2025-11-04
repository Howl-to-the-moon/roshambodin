//console.log my bbg forevah forevah :3
console.log("Hello World")




/* Scores for the winScore() & round choice */
let humanScore = 0;
let computerScore = 0;
       

/* works.
math random generatres between large decimals, math floor rounds it to the 
lowest whole number. multiplying randomm by 3 gives us three evenly
random numbers to choose from and assign the RPS choices.
*/



function getComputerChoice() 
    {
   
     let comChoice = Math.floor(Math.random() * 3);

        return comChoice == 0 ? "ROCK" : 
             comChoice == 1 ?  "PAPER" :
                              "SICCORS";
   
    }



/* just gets the human choice via prompt*/

// 11/4, plays a round each time the button is chose. human choice is built in.

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

        rock.addEventListener("click", (event) => {
            event.preventDefault();
            playRound("ROCK", getComputerChoice());
            
        });

        paper.addEventListener("click", (event) => {
            event.preventDefault();
            playRound("PAPER", getComputerChoice());
        });

        scissors.addEventListener("click", (event) => {
            event.preventDefault();
             playRound("SCISSORS", getComputerChoice());
        });



    /* da game :3 */  
    function playRound(humanChoice, computerChoice)
    {

            //secret tools for later (ie updating html)
        const gameStatus = document.querySelector("#gameStatus");
        const humanPoints = document.querySelector("#humanPoints");
        const computerPoints = document.querySelector("#computerPoints");

    
        
        /*                
        
                                       RIP GLUB VARIABLE
                                       10/04/25 - 11/04/25
                                       "it's glubbin time!!"
        
        
        
        
        
        */
     

        /* 
        Rock Path. I'll explain it rq too.
        Basically just a three way comparison each. Increases score and
        updates html with a round win message. If same, tie and no increase.
         Since score is global its chill. Else is always the scissor
        subpath cause else is shorter than scissor.
        */

        //and the if constantly checks for a win condition cause i'm not thinking big enough on how to impleemnt it better


        // Rock Path
        if (humanChoice == "ROCK" ) {

            if (computerChoice == "ROCK") {
                gameStatus.textContent = "Womp Womp";
                return;
            }

            else if (computerChoice == "PAPER"){
                computerScore++;
                computerPoints.textContent = computerScore;
                 if (computerScore == 5) {
        alert("Computer Wins! You suck at this lol!!");
    }
                return gameStatus.textContent = "Computer Wins. Paper beats Rock";
            }

            else {
                humanScore++;
                humanPoints.textContent = humanScore;
                 if (humanScore >= 5) {
       return alert("Human wins! You can stop playing now.");
    }
                 gameStatus.textContent = "Player wins. Rock beats Siccors";

            }

        }
        /* Paper Path  */
        if (humanChoice == "PAPER") {

            if (computerChoice == "ROCK") {
                humanScore++;
                humanPoints.textContent = humanScore;
                if (humanScore >= 5) {
       return alert("Human wins! You can stop playing now.");
    }
                return gameStatus.textContent = "Player wins. Paper beats Rock";
            }
    
            else if (computerChoice == "PAPER"){
                gameStatus.textContent = "Womp Womp";
                return;
            }

             else {
                computerScore++;
                computerPoints.textContent = computerScore;
                 if (computerScore == 5) {
        alert("Computer Wins! You suck at this lol!!");
    }
                return gameStatus.textContent = "Computer Wins. Scissors beats Paper";
            }

        }  
        /* Scissor P+ath */
        if (humanChoice == "SCISSORS"){

            if (computerChoice == "ROCK") {
                computerScore++;
                computerPoints.textContent = computerScore;
                 if (computerScore == 5) {
        alert("Computer Wins! You suck at this lol!!");
    }
                return gameStatus.textContent = "Computer Wins. Rock beats Scissors";  
            }

            else if (computerChoice == "PAPER"){
                humanScore++;
                humanPoints.textContent = humanScore;
                if (humanScore >= 5) {
       return alert("Human wins! You can stop playing now.");
    }
                return gameStatus.textContent = "Player wins. Rock beats Siccors";
            }

            else {
                gameStatus.textContent = "Womp Womp";
                return;
            }

        }

    }
