let startTime;
let timeInterval;
let running = false

// Function to start the stopwatch
function startTimer() {
    if (!running) {
      startTime = new Date().getTime();
      timerInterval = setInterval(updateTimer, 1000);
      running = true;
    }
  }
  
  // Function to stop the stopwatch
function stopTimer() {
    clearInterval(timerInterval);
    running = false;
  }
  // Function to reset the stopwatch
function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "00:00:00";
    running = false;
  }
  // Function to update the timer display
function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    const hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);
    const formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    document.getElementById("timer").textContent = formattedTime;
  }
  // Function to add leading zero to single-digit numbers
function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }
  // Event listeners for the buttons
document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);