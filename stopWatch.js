// Elements
const displayTime = document.querySelector("#displayTime");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

// variables
let startTime = 0;
let elapsedTime = 0;
let intervalId;

// adding event handler to each button
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// functions to handle click events

// function to start timer
function startTimer() {
  if (!intervalId) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
}

// funtion to stop timer
function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = Date.now() - startTime;
  }
}

// function to reset the timer
function resetTimer() {
  stopTimer(); // cause we wanted to stop the timer and clear intervalId
  elapsedTime = 0;
  displayTime.textContent = "00:00:00";
}

// function for update the time
function updateTime() {
  const currentTime = new Date(Date.now() - startTime + elapsedTime);
  const hrs = currentTime.getUTCHours();
  const mins = currentTime.getUTCMinutes();
  const secs = currentTime.getUTCSeconds();

  displayTime.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;

  function pad(unit) {
    return unit.toString().length < 2 ? "0" + unit : unit;
  }
}
