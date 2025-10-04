//console.log my bbg forevah forevah :3
console.log("Hello World")



/* gets round amount */

function getRoundChoice(){
    return prompt("How many rounds, big dawg/dawgette/them?");
}


/* works.
math random generatres between large decimals, math floor rounds it to the 
lowest whole number. multiplying randomm by 3 gives us three evenly
random numbers to choose from and assign the RPS choices.
*/

    function getComputerChoice() {
   
     let comChoice = Math.floor(Math.random() * 3);

        return comChoice == 0 ? "ROCK" : 
             comChoice == 1 ?  "PAPER" :
                              "SICCORS";
    }



/* just gets the human choice via prompt*/

    function getHumanChoice() {

        return prompt("Rock, Paper, or Scissors?");

    }


/* calculates score */

function winScore (humanScore, computerScore)
{
    if (humanScore > computerScore) 
    {
    console.log ("Human wins with " + humanScore + " points!")
    alert("Human wins with " + humanScore + " points!")
    }

    else if (humanScore < computerScore) 
    {
    console.log ("Computer wins with " + computerScore + " points!")
    alert ("Computer wins with " + computerScore + " points!")
    }

    else 
    {
    console.log("Kill eachother NOW.")
    alert("Kill eachother NOW.")
    }

}





/* everything to do wit da game  */
function playGame()
{

    /* da game :3 */  
    function playRound(humanChoice, computerChoice)
    {

    
        /* just easier text and makes it so the word works 
        no matter the case blah blah i crazy now */
        let glub = humanChoice.toUpperCase();
     

        /* 
        Rock Path. I'll explain it rq too.
        Basically just a three way comparison each. Increases score and
        console.logs a round win message. If same, tie and no increase.
         Since score is global its chill. Else is always the scissor
        subpath cause else is shorter than scissor.
        */
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

        }
        /* Paper path.  */
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
                return console.log ("Computer Wins. Scissors beats Paper");
            }

        }
        /* Scissor path */
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

    /* Scores for the winScore() & round choice */
        let humanScore = 0;
        let computerScore = 0;
        let roundChoice = getRoundChoice(); /* hi 83 */


    /* Calls as many rounds as desired (if confused look at line 150.) */
    for (let i = 0; i < roundChoice ; i++){
        playRound (getHumanChoice(), getComputerChoice());
    }



    /* Calculates end score */
    winScore(humanScore, computerScore);

}



/* .main(){   lol (aka just calls playgame to start it. like a main.*/
playGame();

