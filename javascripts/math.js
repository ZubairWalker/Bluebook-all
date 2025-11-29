let duration = 35 * 60; // 35 minutes in seconds
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
        // Reset timer and question for math2
        sessionStorage.setItem("timeLeft", duration);
        sessionStorage.setItem("isPaused", false);
        sessionStorage.setItem("currentQuestion", 1);
        // redirect user to another html file
        window.location.href = "math2.html";
        // OR: window.location.replace("result.html");
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
bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("rounded-md");
  bookmark.classList.toggle("bg-red-500"); // Tailwind red background
  bookmark.classList.toggle("text-white"); // make icon visible on red
});

const questionBank = [
  {
    text: `A car travels at a speed of at least 25 miles per hour but no more than 50 miles per hour for
a certain part of a trip. Which inequality represents this situation, where :B is the speed of
the car, in miles per hour, on this part of the trip?`,
    question: "What is the simplified form?",
    choices: ["x + 3", "x - 3", "x² - 3", "x² + 3"],
  },
  {
    text: `If 3x - 7 = 11, what is x?`,
    question: "Find the value of x.",
    choices: ["x = 2", "x = 6", "x = -6", "x = 9"],
  },
  {
    text: `5x + 4y = 3, 15x + 12y = 9`,
    question: " For each real number 7', which of the following points lies on the graph of each equation in the xy-plane for the given system ",
    choices: ["x = ±4", "x = ±5", "x = 8", "x = -8"],
  },
  {
    text: `Factor: x² + 5x + 6`,
    question: "Which is the correct factorization?",
    choices: [
      "(x + 2)(x + 3)",
      "(x + 1)(x + 6)",
      "(x + 6)(x - 1)",
      "(x + 4)(x + 2)",
    ],
  },
  {
    text: `If f(x) = 2x + 3, what is f(5)?`,
    question: "Evaluate f(5).",
    choices: ["13", "10", "8", "15"],
  },
  {
    text: `Solve: (x - 2)(x + 4) = 0`,
    question: "What are the solutions?",
    choices: ["x = 2 or -4", "x = -2 or 4", "x = 2", "x = -4"],
  },
  {
    text: `The slope of a line through points (2,3) and (4,7) is:`,
    question: "What is the slope?",
    choices: ["2", "1", "4", "7"],
  },
  {
    text: `If 4x + 2 = 18, solve for x.`,
    question: "What is x?",
    choices: ["x = 4", "x = 5", "x = 3", "x = 8"],
  },
  {
    text: `The area of a circle is 100π. What is the radius?`,
    question: "Find the radius.",
    choices: ["10", "5", "20", "100"],
  },
  {
    text: `If y = 2x + 1 and x = -3, what is y?`,
    question: "Find y.",
    choices: ["-5", "-6", "-7", "-3"],
  },
  {
    text: `Simplify: (x³)(x²)`,
    question: "What is the result?",
    choices: ["x⁵", "x⁶", "x²", "x³"],
  },
  {
    text: `Solve for x: 7x - 9 = 5x + 3`,
    question: "What is x?",
    choices: ["x = 6", "x = -6", "x = 12", "x = 3"],
  },
  {
    text: `The quadratic x² - 16 = 0`,
    question: "What are the solutions?",
    choices: ["x = ±4", "x = ±8", "x = 16", "x = -16"],
  },
  {
    text: `The average of 4 numbers is 12. What is their sum?`,
    question: "Find the sum.",
    choices: ["48", "12", "36", "24"],
  },
  {
    text: `Solve for y: 2y + 5 = 19`,
    question: "What is y?",
    choices: ["7", "6", "5", "8"],
  },
  {
    text: `If a triangle has angles 50° and 60°, what is the third angle?`,
    question: "Find the missing angle.",
    choices: ["70°", "60°", "90°", "100°"],
  },
  {
    text: `If 2x² = 50, solve for x.`,
    question: "What is x?",
    choices: ["x = ±5", "x = ±10", "x = 25", "x = -25"],
  },
  {
    text: `The perimeter of a square is 24. What is the length of one side?`,
    question: "Find the side length.",
    choices: ["6", "12", "8", "24"],
  },
  {
    text: `Solve: (x + 1)(x - 1) = 0`,
    question: "What are the solutions?",
    choices: ["x = 1 or -1", "x = 1 only", "x = -1 only", "x = 0"],
  },
  {
    text: `If a car travels 60 miles in 1.5 hours, what is its speed in mph?`,
    question: "Find the speed.",
    choices: ["40 mph", "45 mph", "50 mph", "60 mph"],
  },
  {
    text: `Simplify: (3x²)(2x³)`,
    // question: "What is the result?",
    choices: ["6x⁵", "5x⁶", "6x⁶", "5x⁵"],
  },
  {
    text: `If 3x=8, what is the value of 21x`,
    choices: ["1", "15", "31", "56"]
  }
];

const answers = document.querySelectorAll(".answer");
const qNumber = document.getElementById("question-number");
const qNumberSpan = document.getElementById("question-number-span");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const qNumEl = document.getElementById("question-number");

const readingEl = document.querySelector(".reading-question"); // h2
const questionEl = document.querySelector(".font-weight"); // h3
const choiceButtons = document.querySelectorAll(".answer .answer-text");

function loadQuestion(index) {
  const q = questionBank[index];
  readingEl.textContent = q.text;
  questionEl.textContent = q.question;

  choiceButtons.forEach((btn, i) => {
    btn.textContent = q.choices[i];
  });

  clearSelections(); // reset styles
}

let currentQuestion = 1;
const totalQuestions = 22;

const answersContainer = document.getElementById("answers");

// clear all buttons before applying selection
function clearSelections() {
  document.querySelectorAll(".answer").forEach((b) => {
    b.classList.remove(
      "border-blue-600",
      "bg-blue-600",
      "text-white",
      "border-4"
    );
    b.classList.add("border-2", "border-gray-300", "bg-white", "text-black");

    const span = b.querySelector(".letter");
    span.classList.remove("bg-blue-600", "text-white", "border-blue-600");
    span.classList.add("bg-white", "text-black", "border-black");
  });
}

// set selected state
function setSelectedButton(btn) {
  clearSelections();

  // button style
  btn.classList.remove("border-2", "border-gray-300", "bg-white", "text-black");
  btn.classList.add("border-3", "border-blue-600", "bg-white", "text-black");

  // letter style
  const span = btn.querySelector(".letter");
  span.classList.remove("bg-white", "text-black", "border-black");
  span.classList.add("bg-blue-600", "text-white", "border-blue-600");
}

function updateQuestionNumber() {
  qNumEl.textContent = currentQuestion;
  prevBtn.disabled = currentQuestion === 1;
  nextBtn.disabled = currentQuestion === totalQuestions;
}

// click handler
answersContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".answer");
  if (!btn) return;
  setSelectedButton(btn);
});
nextBtn.addEventListener("click", () => {
  if (currentQuestion < totalQuestions) {
    currentQuestion++;
    qNumber.textContent = currentQuestion;
    qNumberSpan.textContent = currentQuestion;
    loadQuestion(currentQuestion - 1);
    // Save current question state to sessionStorage
    sessionStorage.setItem("currentQuestion", currentQuestion);
    // TODO: load new question + answers here
  } else if (currentQuestion === totalQuestions) {
    // At last question: save state and go to pitstop page
    sessionStorage.setItem("currentQuestion", currentQuestion);
    window.location.href = "pitstopMath.html";
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 1) {
    currentQuestion--;
    qNumber.textContent = currentQuestion;
    qNumberSpan.textContent = currentQuestion;
    loadQuestion(currentQuestion - 1);
    // TODO: load previous question + answers here
    // Save current question state to sessionStorage
    sessionStorage.setItem("currentQuestion", currentQuestion);
  }
});

// init
// Restore question state from sessionStorage if navigating back from pitstopMath
if (sessionStorage.getItem("currentQuestion")) {
  currentQuestion = parseInt(sessionStorage.getItem("currentQuestion"));
  // Cap restored question to available totalQuestions
  if (currentQuestion > totalQuestions) {
    currentQuestion = totalQuestions;
  } else if (currentQuestion < 1) {
    currentQuestion = 1;
  }
  qNumber.textContent = currentQuestion;
  qNumberSpan.textContent = currentQuestion;
  loadQuestion(currentQuestion - 1);
  // Refresh footer/button states
  if (typeof updateQuestionNumber === 'function') updateQuestionNumber();
}
