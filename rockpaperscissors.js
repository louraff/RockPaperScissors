console.log('Hi!');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'You gotta enter rock, paper or scissors to play the game, mate.';
      } 
  };

//console.log(getUserChoice('PAPER'));

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()* 3) ; 
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  } else {
    return 'I forfeit the game, you win :(';
  } 
};

//console.log(getComputerChoice());


// Below is the same as above but using switch statements.
/*const getComputerChoice = () => {
  let random = Math.floor(Math.random()* 3) ; 
  switch (random) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  case 2:
    return 'scissors';
    break;
  default:
    return 'I forfeit the game, you win :(';
  } 
};

console.log(getComputerChoice()); */

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return "That's a tie! Basically you lost tho so..."
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'You lost to the computer. Yes, your ass got whipped by a machine. #loser'
    } else {
      return 'You won! You beat the computer, not bad human. #winner'
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'You lost to the computer. Yes, your ass got whipped by a machine. #loser'
    } else {
      return 'You won! You beat the computer, not bad human. #winner'
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock') {
      return 'You lost to the computer. Yes, your ass got whipped by a machine. #loser'
    } else {
      return 'You won! You beat the computer, not bad human. #winner'
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice()
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
};

playGame();