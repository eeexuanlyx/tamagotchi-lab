/*-------------------------------- Constants --------------------------------*/
const playBtnEl = document.getElementById("play");
const feedBtnEl = document.getElementById("feed");
const sleepBtnEl = document.getElementById("sleep");
const gameMessageEl = document.getElementById("message");
const resetBtnEl = document.getElementById("restart");

/*---------------------------- Variables (state) ----------------------------*/

let state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

let timer = "";
let gameOver = "";

function init() {
  msgId.classList.add("hidden");
  restartId.classList.add("hidden");
  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;
  gameOver = false;
  timer = setInterval(runGame, 2000);
  render();
}

/*------------------------ Cached Element References ------------------------*/

const boredomStatEl = document.getElementById("boredom-stat");
const hungerStatEl = document.getElementById("hunger-stat");
const sleepinessStatEl = document.getElementById("sleepiness-stat");
const msgId = document.getElementById("message");
const restartId = document.getElementById("restart");

/*-------------------------------- Functions --------------------------------*/

function runGame() {
  updateStates();
  checkGameOver();
  render();
}

function playBtnClick() {
  state.boredom = 0;
  render();
}

function feedBtnClick() {
  state.hunger = 0;
  render();
}

function sleepBtnClick() {
  state.sleepiness = 0;
  render();
}

function render() {
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepinessStatEl.textContent = state.sleepiness;
  if (gameOver === true) {
    clearInterval(timer);
    msgId.classList.remove("hidden");
    restartId.classList.remove("hidden");
  }
}

function updateStates() {
  Object.keys(state).forEach((key) => {
    state[key] += Math.floor(Math.random() * 4);
  });
}

function checkGameOver() {
  Object.keys(state).forEach((key) => {
    if (state[key] > 10) {
      gameOver = true;
      return;
    }
  });
  return gameOver;
}
init();

/*----------------------------- Event Listeners -----------------------------*/
resetBtnEl.addEventListener("click", init);
playBtnEl.addEventListener("click", playBtnClick);
feedBtnEl.addEventListener("click", feedBtnClick);
sleepBtnEl.addEventListener("click", sleepBtnClick);
