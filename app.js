let userScore = 0;
let computerScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".item");
let resetBtn = document.querySelector("#Reset");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#Computer-score");
const genComp = () => {
  let options = ["rock", "paper", "scissor"];
  let indx = Math.floor(Math.random() * 3);
  return options[indx];
};

let showWinner = (userWin, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You win :) computer chose " + compChoice;
    msg.style.color = "green";
  } else {
    computerScore++;
    compScorePara.innerText = computerScore;
    msg.innerText = "you lose :( computer chose " + compChoice;
    msg.style.color = "red";
  }
};

let playGame = (userChoice) => {
  console.log("You picked:", userChoice);

  const compChoice = genComp();
  console.log("Computer picked:", compChoice);

  if (userChoice === compChoice) {
    console.log("It's a draw!");
    msg.innerText = "Its a draw :| You both chose " + compChoice;
    msg.style.color = "black";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, compChoice);
  }
};

resetBtn.addEventListener("click", () => {
  computerScore = 0;
  userScore = 0;
  compScorePara.innerText = 0;
  userScorePara.innerText = 0;
  msg.innerText = "Game Reset. Pick your move.";
  msg.style.color = "black";
});

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
