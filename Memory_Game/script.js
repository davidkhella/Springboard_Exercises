const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

let hasFlippedCard = false;
let lockBoard = false;
let cardOne, cardTwo;
let matchedCards = [];
let guess = 0;
let topScore = localStorage.getItem("topScore");
const guessCounter = document.querySelector("#guess-count");
const topScoreId = document.querySelector("#top-score");
const resetBtn = document.querySelector("#reset");
const startBtn = document.querySelector("#start");

// flipCard = handleCardClick //
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (lockBoard || event.target === cardOne) return;
  event.target.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    cardOne = event.target;
  } else {
    hasFlippedCard = false;
    cardTwo = event.target;
    checkForMatch();
  }
  countGuess();
  console.log(guess);
  numOfGuess();
}

function checkForMatch() {
  let isMatch = cardOne.classList[0] === cardTwo.classList[0];
  isMatch ? handleMatch() : handleMismatch();
}

function handleMatch() {
  cardOne.removeEventListener("click", handleCardClick);
  cardTwo.removeEventListener("click", handleCardClick);
  matchedCards.push(cardOne, cardTwo);

  if (matchedCards.length === COLORS.length) {
    setTimeout(() => {
      alert("Congrats! You matched all cards!");
    }, 0);
  } else if (matchedCards.length < COLORS.length) {
    setTimeout(() => {
      alert("Matched!");
    }, 0);
  }

  resetBoard();
}

function handleMismatch() {
  lockBoard = true;
  setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [cardOne, cardTwo] = [null, null];
}

resetBtn.addEventListener("click", resetAll);

function resetAll() {
  updateTopScore();
  resetBoard();
  gameContainer.innerHTML = "";
  guess = 0;
  guessCounter.innerText = "";
  start();
}

// when the DOM loads
startBtn.addEventListener("click", start);

function start() {
  createDivsForColors(shuffledColors);
  displayTopScore();
}

function countGuess() {
  if (cardTwo || cardOne === cardTwo) {
    guess++;
  }
}

function numOfGuess() {
  guessCounter.innerText = guess;
}

function updateTopScore() {
  if (topScore === null || guess < topScore) {
    localStorage.setItem("topScore", guess);
    topScore = guess;
  }
}

function displayTopScore() {
  topScoreId.innerText = topScore;
}
