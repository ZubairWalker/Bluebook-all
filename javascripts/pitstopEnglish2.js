// Continue the timer from bluesat2.js
const duration = 32 * 60; // 32 minutes in seconds
let timeLeft = sessionStorage.getItem("timeLeft") ? parseInt(sessionStorage.getItem("timeLeft")) : duration;
let isPaused = sessionStorage.getItem("isPaused") ? sessionStorage.getItem("isPaused") === "true" : false;
let timerInterval;

const timerDisplay = document.getElementById("timer");
const pauseBtn = document.getElementById("pauseBtn");

// format seconds into MM:SS
function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// update display
function updateTimer() {
  timerDisplay.textContent = formatTime(timeLeft);
  // Save timer state to sessionStorage
  sessionStorage.setItem("timeLeft", timeLeft);
  sessionStorage.setItem("isPaused", isPaused);
}

// start countdown
function startTimer() {
  timerInterval = setInterval(() => {
    if (!isPaused && timeLeft > 0) {
      timeLeft--;
      updateTimer();

      // ⬇️ when timer ends
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        // redirect user to another html file
        window.location.href = "breaktimer.html";
      }
    }
  }, 1000);
}

// initialize
updateTimer();
startTimer();

// toggle pause/resume
pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "hide";
  sessionStorage.setItem("isPaused", isPaused);
});

document.querySelectorAll(".highlight").forEach((el) => {
  el.addEventListener("click", () => {
    // toggles the Tailwind gray bg
    el.classList.toggle("bg-gray-200");
    // accessibility bonus: reflect state
    el.setAttribute("aria-pressed", el.classList.contains("bg-gray-200"));
  });
});

document.querySelectorAll(".zoom").forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("bg-gray-200");
    el.setAttribute("aria-pressed", el.classList.contains("bg-gray-200"));
  });
});

document.querySelectorAll(".icon").forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("text-red-700");
    el.setAttribute("aria-pressed", el.classList.contains("bg-gray-200"));
  });
});

const bookmark = document.getElementById("bookmark");
if (bookmark) {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("rounded-md");
    bookmark.classList.toggle("bg-red-500"); // Tailwind red background
    bookmark.classList.toggle("text-white"); // make icon visible on red
  });
}

// Back button to navigate to question 27 in bluesat2.html
const prevBtn = document.getElementById("prevBtn");
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    // Set current question to 27 and navigate to bluesat2.html
    sessionStorage.setItem("currentQuestion", 27);
    window.location.href = "bluesat2.html";
  });
}
