let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"]; //for random
  //rock, paper, scissors
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

/*Math.random for random if we want between some 
    specific number we can do it as Math.random*2 it  
    it will multiply by 3 if we do *2 only 0 to 3 
    we can do any number now if we dont want .0009858e9
    we can do math.floor(math.random() *3) ok  */

const drawGame = (userChoice) => {
  //console.log("Game was draw.");
  msg.innerText = "Game was Draw. Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    //console.log("you win!");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("you lose");
    msg.innerText = `You lose. ${compChoice} beats your${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //console.log("user choice = ", userChoice);
  //Generate computer choice -> moduler
  const compChoice = genCompChoice();
  //console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}; //this is not working for scissors

choices.forEach((choice) => {
  //console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked ");
    //console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
