//console.log my bbg forevah forevah :3
console.log("Hello World")




/* works.
math random generatres between large decimals, math floor rounds it to the 
lowest whole number. multiplying randomm by 3 gives us three evenly
random numbers to choose from and assign the RPS choices.
*/

function getComputerChoice() {
   
    let comChoice = Math.floor(Math.random() * 3);

    return comChoice == 0 ? "ROCK" : 
           comChoice == 1 ? "PAPER":
                            "SICCORS";
}

/* just gets the human choice via prompt*/

function getHumanChoice() {

 return prompt("Rock, Paper, or Scissors?");

}


/* calculates score */

function winScore (humanScore, computerScore){
    if (humanScore > computerScore) {
    console.log ("Human wins with " + humanScore + " points!")
}

else if (humanScore < computerScore) {
    console.log ("Computer wins with " + computerScore + " points!")
}

else {
    console.log("Kill eachother NOW.")
}

}




/* It DOESNT works */
   /*const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();*/

function playGame()
{

    function playRound(humanChoice, computerChoice)
    {

    

    let glub = humanChoice.toUpperCase();
     console.log(glub);

     if (glub == "ROCK" ) {

        if (computerChoice == "ROCK") {
            console.log ('Womp Womp');
            return;
        }

        else if (computerChoice == "PAPER"){
            computerScore++;
            return console.log ("Computer Wins. Paper beats Rock")
        }

        else {
            humanScore++;
            return console.log("Player wins. Rock beats Siccors");
        }

    };

     if (glub == "PAPER") {

        if (computerChoice == "ROCK") {
           
                humanScore++;
                return console.log("Player wins. Paper beats Rock");
         }
    
        else if (computerChoice == "PAPER"){
            
            console.log ('Womp Womp');
            return;

        }

        else {
            computerScore++;
            return console.log ("Computer Wins. Scissors beats Paper")

    }

    }; 

    if (glub == "SCISSORS"){

        if (computerChoice == "ROCK") {
           
             computerScore++;
            return console.log ("Computer Wins. Rock beats Scissors")
        }

        else if (computerChoice == "PAPER"){
           
            humanScore++;
            return console.log("Player wins. Rock beats Siccors");
        }

        else {
         console.log ('Womp Womp');
            return;
        }

    }




    }

        let humanScore = 0;
        let computerScore = 0;
        

 
    for (let i = 0; i < 5 ; i++){
        playRound (getHumanChoice(), getComputerChoice());
    }




winScore(humanScore, computerScore);

}

/* .main(){   lol */
playGame();






































/*
 const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

function playGame()
{

    function playRound(humanChoice, computerChoice)
    {

    

    let glub = humanChoice.toUpperCase();
     console.log(glub);

     if (glub == "ROCK" ) {

        if (computerChoice == "ROCK") {
            console.log ('Womp Womp');
            return;
        }

        else if (computerChoice == "PAPER"){
            computerScore++;
            return console.log ("Computer Wins. Paper beats Rock")
        }

        else {
            humanScore++;
            return console.log("Player wins. Rock beats Siccors");
        }

    };

     if (glub == "PAPER") {

        if (computerChoice == "ROCK") {
           
                humanScore++;
                return console.log("Player wins. Paper beats Rock");
         }
    
        else if (computerChoice == "PAPER"){
            
            console.log ('Womp Womp');
            return;

        }

        else {
            computerScore++;
            return console.log ("Computer Wins. Scissors beats Paper")

    }

    }; 

    if (glub == "SCISSORS"){

        if (computerChoice == "ROCK") {
           
             computerScore++;
            return console.log ("Computer Wins. Rock beats Scissors")
        }

        else if (computerChoice == "PAPER"){
           
            humanScore++;
            return console.log("Player wins. Rock beats Siccors");
        }

        else {
         console.log ('Womp Womp');
            return;
        }

    }




    }

        let humanScore = 0;
        let computerScore = 0;


 

playRound (humanSelection, computerSelection);
playRound (humanSelection, computerSelection);
playRound (humanSelection, computerSelection);
playRound (humanSelection, computerSelection);
playRound (humanSelection, computerSelection);

if (humanScore > computerScore) {
    console.log ("Human wins with " + humanScore + " points!")
}

else if (humanScore < computerScore) {
    console.log ("Computer wins with " + computerScore + " points!")
}

else (
    console.log("Kill eachother NOW.")
)


}


playGame();


*/