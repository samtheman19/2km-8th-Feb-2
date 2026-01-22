/************************************************
 * TIMER LOGIC
 ************************************************/
let seconds = 0;
let running = false;
let interval = null;

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

/************************************************
 * WORKOUT DATA (BY DAY)
 ************************************************/
const workouts = {
  sat: `
    <h3>Warm-up</h3>
    <ul>
      <li>10 min easy</li>
      <li>3 × 20s strides</li>
    </ul>

    <h3>Tempo / Steady</h3>
    <ul>
      <li>Incline: 1.0%</li>
      <li>10 min easy @ 11–12 km/h</li>
      <li>10–15 min steady @ 13–14 km/h</li>
      <li>5 min easy cool down</li>
    </ul>
  `,
  mon: `
    <h3>Intervals</h3>
    <ul>
      <li>Warm-up 10 min</li>
      <li>6 × 400m hard</li>
      <li>90s rest</li>
      <li>Cool down 10 min</li>
    </ul>
  `,
  tue: `
    <h3>Easy Run</h3>
    <ul>
      <li>25–30 min easy</li>
      <li>Optional strides</li>
    </ul>
  `,
  wed: `
    <h3>Tempo</h3>
    <ul>
      <li>15 min steady</li>
      <li>Comfortably hard effort</li>
    </ul>
  `,
  thu: `
    <h3>Recovery</h3>
    <ul>
      <li>20 min very easy</li>
      <li>Mobility & stretching</li>
    </ul>
  `,
  fri: `
    <h3>Speed</h3>
    <ul>
      <li>10 × 200m fast</li>
      <li>Full recovery between reps</li>
    </ul>
  `,
  sun: `
    <h3>Long Easy</h3>
    <ul>
      <li>40 min relaxed pace</li>
    </ul>
  `
};

/************************************************
 * DAY SELECTOR LOGIC
 ************************************************/
const daySelect = document.getElementById("daySelect");
const workoutDetails = document.getElementById("workoutDetails");

// Default load (Saturday)
daySelect.value = "sat";
workoutDetails.innerHTML = workouts.sat;

daySelect.addEventListener("change", () => {
  const selectedDay = daySelect.value;
  workoutDetails.innerHTML = workouts[selectedDay];
});
