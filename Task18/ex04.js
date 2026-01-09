const words = [
  "javascript",
  "html",
  "css",
  "react",
  "node",
  "frontend",
  "backend",
];

const wordDisplay = document.getElementById("word");
const input = document.getElementById("input");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start-btn");

let score = 0;
let time = 60;
let timer = null;
let currentWord = "";

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function showWord() {
  currentWord = getRandomWord();
  wordDisplay.textContent = currentWord;
}

function startGame() {
  score = 0;
  time = 60;

  scoreDisplay.textContent = "Score: 0";
  timeDisplay.textContent = "Time: 60";

  input.value = "";
  input.disabled = false;
  input.focus();

  showWord();

  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

function updateTime() {
  time--;
  timeDisplay.textContent = `Time: ${time}`;

  if (time === 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(timer);
  input.disabled = true;
  wordDisplay.textContent = "Game Over!";
  alert(`Game over! Your score: ${score}`);
}

input.addEventListener("input", () => {
  if (input.value === currentWord) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    input.value = "";
    showWord();
  }
});

startBtn.addEventListener("click", startGame);
