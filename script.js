const main = document.querySelector("main");
const rulesButton = document.querySelector(".rules__section");
const rulesDiagram = document.querySelector(".game__rule__section");
const bodyEl = document.querySelector("body");
const closeIcon = document.querySelector(".close__icon");

// ICONS
const rockIcon = document.querySelector(".rock__icon");
const paperIcon = document.querySelector(".paper__icon");
const scissorsIcon = document.querySelector(".scissors__icon");
let parentContainer = document.querySelector(".icons__container");

// GET SRC ATTRIBUTE
let playerChoiceIcon = "";

let computerChoiceImage = document.querySelector(".computer__choice__image");
let playerChoiceImage = document.querySelector(".player__choice__image");

const homeMenu = document.querySelector(".step__1");
const playersChoiceMenu = document.querySelector(".step__2");
const winnerDecided = document.querySelector(".winner__decided");

let scoreBoard = document.querySelector(".score");
let playerChoice = "";
let computerChoice = "";

const playAgainButton = document.querySelector(".play__again__btn");

let gameResult = "";

let gameDecision = document.querySelector(".game__decision");

let gameScore = 0;

const toggleRulesDiagram = () => {
  if (rulesDiagram.style.display === "none") {
    rulesDiagram.style.display = "block";
  } else {
    rulesDiagram.style.display = "none";
  }
};

main.addEventListener("click", () => (rulesDiagram.style.display = "none"));

const handleComputerChoice = () => {
  const randomMove = Math.random();
  console.log(randomMove);

  if (randomMove > 0 / 3 && randomMove < 1 / 3) {
    computerChoice = "ROCK";
    computerChoiceImage.src = "./images/icon-rock.svg";
  } else if (randomMove > 1 / 3 && randomMove < 2 / 3) {
    computerChoice = "PAPER";
    computerChoiceImage.src = "./images/icon-paper.svg";
  } else {
    computerChoice = "SCISSORS";
    computerChoiceImage.src = "./images/icon-scissors.svg";
  }
  anime({
    targets: ".computer__choice__image",
    translateX: [-500, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    delay: 500,
  });
  console.log(`Computer Game: ${computerChoice}`);
};

const handlePlayerChoice = (e) => {
  anime({
    targets: ".player__choice__image",
    opacity: [0, 1],
    translateX: [-500, 0],
    easing: "easeOutExpo",
    delay: 300,
  });

  handleComputerChoice();
  if (e.target.classList.contains("rock__icon")) {
    playerChoice = "ROCK";
  } else if (e.target.classList.contains("paper__icon")) {
    playerChoice = "PAPER";
  } else if (e.target.classList.contains("scissors__icon")) {
    playerChoice = "SCISSORS";
  }

  const imgSrc = e.target.getAttribute("src");
  playerChoiceIcon = imgSrc;

  playerChoiceImage.src = playerChoiceIcon;
  console.log(playerChoiceIcon);

  playersChoiceMenu.style.display = "flex";
  homeMenu.style.display = "none";
  winnerDecided.style.opacity = 100;

  console.log(`Player Game: ${playerChoice}`);
};

const handleGameLogic = () => {
  anime({
    targets: ".winner__decided",
    opacity: [0, 1],
    translateY: [500, 0],
    easing: "easeOutExpo",
    delay: 600,
  });

  if (computerChoice === "PAPER") {
    if (playerChoice === "PAPER") {
      gameResult = "TIE";
      gameScore;
    } else if (playerChoice === "ROCK") {
      gameResult = "YOU LOSE";
      playAgainButton.style.color = "#db2e4d";
      computerChoiceImage.classList.add("addRadicalBg");
      gameScore--;
    } else {
      gameResult = "YOU WIN";
      playAgainButton.style.color = "#3B4262";
      playerChoiceImage.classList.add("addRadicalBg");
      gameScore++;
    }
  } else if (computerChoice === "ROCK") {
    if (playerChoice === "PAPER") {
      gameResult = "YOU WIN";
      playAgainButton.style.color = "#3B4262";

      playerChoiceImage.classList.add("addRadicalBg");
      gameScore++;
    } else if (playerChoice === "ROCK") {
      gameResult = "TIE";
      gameScore;
    } else {
      gameResult = "YOU LOSE";

      playAgainButton.style.color = "#db2e4d";
      computerChoiceImage.classList.add("addRadicalBg");
      gameScore--;
    }
  } else if (computerChoice === "SCISSORS") {
    if (playerChoice === "PAPER") {
      gameResult = "YOU LOSE";
      playAgainButton.style.color = "#db2e4d";
      computerChoiceImage.classList.add("addRadicalBg");
      gameScore--;
    } else if (playerChoice === "ROCK") {
      gameResult = "YOU WIN";
      playAgainButton.style.color = "#3B4262";
      playerChoiceImage.classList.add("addRadicalBg");
      gameScore++;
    } else {
      gameScore;
      gameResult = "TIE";
    }
  }
  gameDecision.textContent = gameResult;

  scoreBoard.textContent = gameScore;
  console.log(`Result: ${gameResult}: ${gameScore}`);
};

const playAgain = () => {
  // playAgainButton.style.color = "#3B4262";
  playersChoiceMenu.style.display = "none";
  homeMenu.style.display = "flex";
  winnerDecided.style.opacity = 0;
  // playAgainButton.style.color = "#db2e4d";

  playerChoiceImage.classList.remove("addRadicalBg");
  computerChoiceImage.classList.remove("addRadicalBg");
};

parentContainer.addEventListener("click", (e) => {
  e.preventDefault();
  handlePlayerChoice(e);
  handleGameLogic();
});
rulesButton.addEventListener("click", toggleRulesDiagram);
closeIcon.addEventListener("click", toggleRulesDiagram);
playAgainButton.addEventListener("click", playAgain);
