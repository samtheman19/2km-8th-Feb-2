let seconds = 0;
let running = false;
let interval;

const timeDisplay = document.getElementById("time");
const startPauseBtn = document.getElementById("startPause");
const resetBtn = document.getElementById("reset");

function formatTime(s) {
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

function updateTime() {
  timeDisplay.textContent = formatTime(seconds);
}

startPauseBtn.addEventListener("click", () => {
  if (!running) {
    running = true;
    startPauseBtn.textContent = "Pause";
    interval = setInterval(() => {
      seconds++;
      updateTime();
    }, 1000);
  } else {
    running = false;
    startPauseBtn.textContent = "Start";
    clearInterval(interval);
  }
});

resetBtn.addEventListener("click", () => {
  running = false;
  seconds = 0;
  clearInterval(interval);
  startPauseBtn.textContent = "Start";
  updateTime();
});

updateTime();
