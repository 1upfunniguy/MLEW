const PLAY_BTN = document.getElementById("play-btn");
const GAME_INTRO = document.getElementById("game-intro");
const levelOne = document.querySelector(".level-one");
const levelTwo = document.querySelector(".level-two");
const levelThree = document.querySelector(".level-three");
const mazeBorder1 = document.querySelector(".maze-border1");
const mazeBorder2 = document.querySelector(".maze-border2");
const mazeBorder3 = document.querySelector(".maze-border3");
const mazeFinish1 = document.querySelector(".maze-finish1");
const mazeFinish2 = document.querySelector(".maze-finish2");
const mazeEndgame = document.querySelector(".maze-endgame");
const scaryImg = document.querySelector(".scary-img");
const screamSound = document.querySelector(".scream-sound");
const gameDisplay = document.getElementById("game");
const gameContainer = document.querySelector(".scary-maze-container");

PLAY_BTN.addEventListener("click", () => {
  GAME_INTRO.style.display = "none";
  levelOne.style.display = "block";

  // Disable mouse menu
  gameDisplay.setAttribute("oncontextmenu", "return false");
});

function encounterCheck(val) {
  if (val === "maze-border1") {
    GAME_INTRO.style.display = "block";
    levelOne.style.display = "none";
  }

  if (val === "maze-finish1") {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
  }

  if (val === "maze-border2") {
    GAME_INTRO.style.display = "block";
    levelTwo.style.display = "none";
  }

  if (val === "maze-finish2") {
    levelTwo.style.display = "none";
    levelThree.style.display = "block";
  }

  if (val === "maze-border3") {
    GAME_INTRO.style.display = "block";
    levelThree.style.display = "none";
  }

  if (val === "maze-endgame") {
    screamSound.play();
    levelThree.style.display = "none";
    gameContainer.style.display = "none";
  }
}

window.addEventListener("mouseover", (e) => {
  const check = e.target.classList.value;
  encounterCheck(check);
});
