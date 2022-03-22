let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {

    return Math.floor(Math.random() * 10);

}

//   console.log(generateTarget(7))

const compareGuesses = (humanNum, computerNum, target) => {

let computerGuess = Math.abs(target - computerNum);
let humanGuess = Math.abs(target - humanNum)

if (humanNum > 9 || humanNum < 0)
 alert('Enter a number between 0 aand 9')
       
    if (humanGuess <= computerGuess) 
        return true;

    else  
        return false;
    
}
const updateScore = winner => {
     
    if (winner === 'human') {
       humanScore++;

    } else if (winner === 'computer')
      computerScore++;

}
      function advanceRound() {

         currentRoundNumber++;
    }  


