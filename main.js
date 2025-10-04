//console.log my bbg forevah forevah :3
console.log("Hello World")

let humanScore = 0;
let computerScore = 0;


/* works.
math random generatres between large decimals, math floor rounds it to the 
lowest whole number. multiplying randomm by 3 gives us three evenly
random numbers to choose from and assign the RPS choices.
*/

function getComputerChoice() {
   
    let comChoice = Math.floor(Math.random() * 3);

    return comChoice == 0 ? "Rock" : 
           comChoice == 1 ? "Paper":
                            "Siccors";
}

/* just gets the human choice via prompt*/

function getHumanChoice() {

 prompt("Rock, Paper, or Sccissors?");
}

console.log(getHumanChoice)
