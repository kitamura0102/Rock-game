const getComputerChoice = function () {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * 3)];
};

// const round = function (playerSelection, computerSelection) {
//   computerSelection = getComputerChoice();
//   return computerSelection
// };

// console.log(getComputerChoice(), round())

const playRound = function (playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  // playerSelection = prompt("Rock, paper or SCISSORS?").toUpperCase();
  playerSelection = getComputerChoice();


  if((playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
  playerSelection === "PAPER" && computerSelection === "ROCK" ||
  playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
    return `The player beated the computer because  ${playerSelection} beats ${computerSelection}`
  }else if (playerSelection === computerSelection){
    return `This is a tie because ${playerSelection} and  ${computerSelection} are the same`
  }else {
    return `The Computer beated the player because ${computerSelection} beats ${playerSelection}`
  }
  
  
}
// console.log(playRound())
// console.log(playRound())
// console.log(playRound())
// console.log(playRound())
// console.log(playRound())

const game = function(){
  for(i = 0; i >= 5; i++){
    
    console.log(playRound())
    
  }
}
game()