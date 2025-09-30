let duration = 32 * 60; // 32 minutes in seconds 32 * 60
let timeLeft = duration;
let isPaused = false;
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
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
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
    text: `The following text is from John Matheus's 1925 novel Fog. The story happens in a city where heavy fog has set in.`,
    question:
      "As used in the text, what does the word 'registered' most nearly mean?",
    choices: [
      "enrolled",
      "valued",
      "disregarded",
      "displayed",
    ],
  },
  {
    text: `The following text is from John Matheus's 1925 novel Fog. The story happens in a city where heavy fog has set in.`,
    question: "As used in the text, what does the word 'registered' most nearly mean?",
    choices: [
      "enrolled",
      "valued",
      "disregarded",
      "displayed",
    ],
  },
  {
    text: `In 1928, Alexander Fleming observed that mold had killed the bacteria around it...`,
    question: "What discovery is described in the passage?",
    choices: [
      "The process of photosynthesis.",
      "The invention of the microscope.",
      "The discovery of penicillin.",
      "The theory of relativity.",
    ],
  },
  {
    text: `Although fewer companies trade their stocks on the Tehran Stock Exchange in Tehran, Iran, than on the stock exchanges in London, Mumbai, or Tokyo, the Tehran Stock Exchange has the advantage of focusing on local companies and thus reflecting economic circumstances that are ______ Iran. This sensitivity to unique, rapidly evolving local conditions benefits the companies and investors alike.`,
    question: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      "irrelevant to",
      "prohibitive in",
      "distinctive to",
      "unchanging in",
    ],
  },
  {
    text: `In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Caracas, Venezuela, and of Fortaleza, Brazil, were surveyed about parks in their cities. Of the 1,043 respondents from Caracas, 44.7% indicated that they use the city's parks, and of the 938 respondents from Fortaleza, 35.7% indicated using city parks.  however, given that the percentage of Caracas respondents who reported living within a 10-minute walk of a park was much lower than that reported by Fortaleza respondents, greater proximity alone can't explain the difference in park use.`,
    question: "Which choice best describes the function of the underlined portion in the text as a whole?",
    choices: [
      "It introduces a counterexample to the scenario described earlier in the text",
      "pIt provides context to help understand the scope of the researchers' survey.",
      "It marks a shift from a discussion of the researchers’ conclusion to a discussion of their methods",
      "It presents a potential explanation for the team's findings that the text goes on to refute",
    ],
  },
  {
    text: `
        The following text is adapted from Anton Chekhov's 1899 play Uncle Vanya . Professor Serebrakoff retires and moves to his country estate, which Vanya manages with the help of Sonia, the professor's daughter from a previous marriage. Chekhov portrays the professor as being someone unable to adjust to living at the country estate, as is evident when ______`,
    question: "Which quotation from Uncle Vanya most effectively illustrates the claim?",
    choices: [
      "Professor Serebrakoff says,I am a book-worm and a scholar, and am unfamiliar with practical affairs. I cannot, ",
      "Professor Serebrakoff says to Helena, My darling, don't leave me alone with [Vanya]. He will begin",
      "Professor Serebrakoff says to Helena,I am used to my library and the lecture hall and to the esteem and admiration of my colleagues. Now I suddenly find myself plunged into this wilderness(the cottage),",
      " Vanya says to Professor Serebrakoff, You write on art without knowing anything about it. ",
    ],
  },
  {
    text: `In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Caracas, Venezuela, and of Fortaleza, Brazil, were surveyed about parks in their cities. Of the 1,043 respondents from Caracas, 44.7% indicated that they use the city's parks, and of the 938 respondents from Fortaleza, 35.7% indicated using city parks. However, given that the percentage of Caracas respondents who reported living within a 10-minute walk of a park was much lower than that reported by Fortaleza respondents, greater proximity alone can't explain the difference in park use.`,
    question: "Which choice best describes the function of the underlined portion in the text as a whole?",
    choices: [
      "It introduces a counterexample to the scenario described earlier in the text.",
      "It supports the main claim with statistical evidence.",
      "It clarifies a term used earlier in the passage.",
      "It provides historical context for the argument."
    ]
  },
  {
    text: `The Amazon rainforest, often referred to as the “lungs of the Earth,” produces a significant share of the world’s oxygen and houses an immense variety of species. Yet, in recent decades, widespread deforestation has threatened both biodiversity and the planet’s climate system. Scientists warn that if the pace of deforestation continues, the Amazon could reach a tipping point where its ecosystem can no longer sustain itself.`,
    question: "What is the main idea of the passage?",
    choices: [
      "The Amazon is vital for both biodiversity and climate stability.",
      "The Amazon is primarily a source of timber and farmland.",
      "Deforestation in the Amazon has slowed in recent years.",
      "The Amazon contributes little to the global environment."
    ]
  },
  // 3
  {
    text: `In 1928, Alexander Fleming observed that a mold called Penicillium notatum had destroyed colonies of Staphylococcus bacteria on a laboratory plate. Although Fleming himself was cautious about the discovery, his work eventually led to the development of penicillin, the first widely used antibiotic. The drug revolutionized medicine, saving countless lives during World War II and beyond.`,
    question: "Which discovery is described in the passage?",
    choices: [
      "The process of photosynthesis.",
      "The theory of evolution.",
      "The discovery of penicillin.",
      "The invention of anesthesia."
    ]
  },
  // 4
  {
    text: `During the late 19th century, American women increasingly entered the workforce, though often in positions with limited pay and little recognition. Activists like Susan B. Anthony and Elizabeth Cady Stanton argued that women’s economic contributions justified equal political rights. Their campaign linked suffrage to broader questions of justice and equality within American democracy.`,
    question: "What is the central claim of the passage?",
    choices: [
      "Women’s participation in the workforce supported the demand for political equality.",
      "Women’s economic roles were largely unimportant in 19th-century America.",
      "Suffragists discouraged women from seeking employment outside the home.",
      "Political equality had already been achieved for women by the late 19th century."
    ]
  },
  // 5
  {
    text: `In the early 20th century, Albert Einstein’s theory of relativity challenged Newtonian physics by proposing that space and time are not absolute but relative to the observer. Though initially met with skepticism, the theory was confirmed by the 1919 solar eclipse, when light was observed bending around the sun exactly as Einstein predicted.`,
    question: "Which best describes the significance of the 1919 eclipse?",
    choices: [
      "It disproved Einstein’s predictions about gravity.",
      "It provided experimental support for relativity.",
      "It established Newtonian physics as fully accurate.",
      "It demonstrated that light travels instantaneously."
    ]
  },
  // 6
  {
    text: `In 1831, Charles Darwin embarked on the HMS Beagle, a journey that profoundly shaped his understanding of natural history. His observations of species on the Galápagos Islands, particularly the finches with their varied beak shapes, led him to consider how organisms adapt to their environments over time. These insights contributed directly to his theory of natural selection.`,
    question: "According to the passage, Darwin’s observations of finches led him to conclude that—",
    choices: [
      "all finches originated in Europe.",
      "species adapt to their surroundings over generations.",
      "environmental changes have little effect on species.",
      "birds cannot migrate across islands."
    ]
  },
  // 7
  {
    text: `The Industrial Revolution brought rapid urbanization to Britain, with thousands leaving rural villages to work in factories. While industrial growth created economic opportunity, it also produced overcrowded cities plagued by pollution, poor sanitation, and harsh labor conditions. Social reformers pressed for housing laws, labor protections, and public health measures to address these challenges.`,
    question: "What problem does the passage emphasize?",
    choices: [
      "Economic stagnation in rural villages.",
      "The dangers of urban overcrowding and poor living conditions.",
      "The efficiency of factory work in Britain.",
      "The decline of industrial growth in the 19th century."
    ]
  },
  // 8
  {
    text: `Marie Curie’s groundbreaking research on radioactivity earned her two Nobel Prizes, one in physics and another in chemistry. Despite facing skepticism and barriers as a woman in science, she pioneered methods of isolating radioactive isotopes and discovered the elements polonium and radium. Her work laid the foundation for advances in medicine and nuclear energy.`,
    question: "What does the passage highlight about Marie Curie?",
    choices: [
      "Her research was limited to teaching rather than discovery.",
      "She made significant contributions despite obstacles.",
      "She relied heavily on the work of other scientists.",
      "She abandoned research after early experiments failed."
    ]
  },
  // 9
  {
    text: `In recent years, psychologists have studied the role of “grit,” or perseverance and passion for long-term goals, in predicting success. Some studies suggest grit may be as important as intelligence in academic achievement. However, critics argue that focusing too heavily on grit may overlook structural inequalities that influence outcomes.`,
    question: "What is the author’s perspective on grit?",
    choices: [
      "It is the sole determinant of academic achievement.",
      "It should not be studied scientifically.",
      "Its importance is debated among scholars.",
      "It is unrelated to intelligence."
    ]
  },
  // 10
  {
    text: `In 1776, the American Declaration of Independence asserted that governments derive “their just powers from the consent of the governed.” This idea, influenced by Enlightenment philosophers such as John Locke, challenged monarchies based on hereditary rule. The declaration not only justified separation from Britain but also inspired democratic movements worldwide.`,
    question: "Which idea most influenced the Declaration of Independence?",
    choices: [
      "The belief that rulers should govern without limits.",
      "The principle that authority comes from the people.",
      "The view that hereditary monarchy is necessary.",
      "The argument that democracy leads to chaos."
    ]
  },
  // 11
  {
    text: `The Great Depression of the 1930s devastated economies across the globe. In the United States, unemployment reached unprecedented levels, and many families lost their homes and savings. President Franklin D. Roosevelt responded with the New Deal, a series of programs aimed at providing relief, recovery, and reform to the struggling nation.`,
    question: "What was the primary purpose of the New Deal?",
    choices: [
      "To punish banks for risky lending practices.",
      "To provide assistance and stimulate recovery.",
      "To expand U.S. territory overseas.",
      "To end international trade agreements."
    ]
  },
  // 12
  {
    text: `In recent decades, scientists have debated whether Pluto should be classified as a planet. When astronomers discovered other celestial bodies of similar size beyond Neptune, the International Astronomical Union in 2006 redefined the criteria for planethood, reclassifying Pluto as a “dwarf planet.” The decision sparked both controversy and nostalgia.`,
    question: "Why was Pluto reclassified as a dwarf planet?",
    choices: [
      "It lacked sufficient size and clear orbit.",
      "It had no moons to support its status.",
      "It was closer to Earth than other planets.",
      "It collided with another celestial body."
    ]
  },
  // 13
  {
    text: `Harriet Tubman, once enslaved, became a leading figure in the Underground Railroad, guiding dozens of enslaved people to freedom. Beyond her rescues, Tubman served as a spy and nurse during the Civil War. Her courage and determination made her an enduring symbol of resistance and justice.`,
    question: "Which best describes Tubman’s role during her lifetime?",
    choices: [
      "She was a passive observer of the abolitionist movement.",
      "She risked her life repeatedly to fight for freedom.",
      "She limited her efforts to her own escape.",
      "She opposed the Civil War’s abolitionist goals."
    ]
  },
  // 14
  {
    text: `Global climate change has increased the frequency of extreme weather events such as hurricanes, droughts, and heat waves. Scientists emphasize that these patterns are consistent with rising greenhouse gas emissions caused by human activity. While adaptation is possible, many warn that without mitigation, the risks will intensify.`,
    question: "What is the author’s main concern?",
    choices: [
      "That extreme weather has natural causes only.",
      "That human activity is intensifying climate risks.",
      "That adaptation is impossible in any form.",
      "That greenhouse gases are declining worldwide."
    ]
  },
  // 15
  {
    text: `Shakespeare’s plays continue to be studied not merely for their historical value but for their insights into human nature. Characters like Hamlet and Macbeth embody struggles with morality, ambition, and fate that still resonate today. Modern directors adapt these plays to contemporary settings, demonstrating their timeless relevance.`,
    question: "Why are Shakespeare’s works considered timeless?",
    choices: [
      "They focus solely on historical events.",
      "Their themes of human struggle remain relevant.",
      "They are written in modern, easy-to-read English.",
      "They avoid exploring universal emotions."
    ]
  },
  // 16
  {
    text: `During the Cold War, the United States and the Soviet Union engaged in an arms race, developing nuclear weapons capable of unprecedented destruction. The policy of “mutually assured destruction” discouraged direct conflict, as leaders on both sides recognized that nuclear war would be catastrophic for all.`,
    question: "What prevented direct conflict between the U.S. and the Soviet Union?",
    choices: [
      "Mutual fear of catastrophic nuclear consequences.",
      "A shared commitment to disarmament.",
      "The collapse of Soviet influence worldwide.",
      "International treaties banning all weapons."
    ]
  },
  // 17
  {
    text: `In the 15th century, Johannes Gutenberg’s invention of the movable-type printing press transformed European society. For the first time, books could be mass-produced, spreading knowledge far beyond monasteries and universities. The invention is often credited with fueling the Renaissance and the Protestant Reformation.`,
    question: "What was one major effect of Gutenberg’s printing press?",
    choices: [
      "It restricted access to books.",
      "It enabled widespread distribution of knowledge.",
      "It reduced literacy rates in Europe.",
      "It discouraged religious debate."
    ]
  },
  // 18
  {
    text: `Modern genetic research has revealed that humans share about 98–99% of their DNA with chimpanzees. This finding highlights the close evolutionary relationship between species, while also emphasizing how small genetic differences can account for vast behavioral and cognitive distinctions.`,
    question: "What does the passage suggest about human-chimpanzee genetics?",
    choices: [
      "The species share very little DNA.",
      "Small genetic differences create significant distinctions.",
      "Humans evolved directly from modern chimpanzees.",
      "Genetic comparisons are scientifically meaningless."
    ]
  },
  // 19
  {
    text: `The construction of the transcontinental railroad in the United States linked the Atlantic and Pacific coasts, dramatically reducing travel time across the country. While the project spurred economic growth, it also displaced Native American communities and altered ecosystems.`,
    question: "What was one consequence of the transcontinental railroad?",
    choices: [
      "It eliminated economic opportunities in the West.",
      "It displaced Indigenous peoples and altered landscapes.",
      "It prevented migration and trade across the country.",
      "It failed to connect the coasts effectively."
    ]
  },
  // 20
  {
    text: `Jane Austen’s novels, though written in the early 19th century, continue to attract readers with their sharp social commentary and memorable characters. Works like Pride and Prejudice critique the limitations placed on women in a society that valued marriage as economic security.`,
    question: "What theme is central in Austen’s novels?",
    choices: [
      "The benefits of absolute monarchy.",
      "The challenges of women navigating social expectations.",
      "The decline of literature in the 19th century.",
      "The importance of military conquest."
    ]
  },
  // 21
  {
    text: `The space race of the 1960s symbolized Cold War competition between the U.S. and the Soviet Union. The Soviet launch of Sputnik in 1957 shocked Americans, while the U.S. landing on the moon in 1969 represented a triumph of technology and national pride.`,
    question: "What did the moon landing symbolize?",
    choices: [
      "An end to global technological progress.",
      "A U.S. victory in the space race.",
      "A cooperative effort between nations.",
      "The failure of Cold War competition."
    ]
  },
];

const answers = document.querySelectorAll(".answer");
const qNumber = document.getElementById("question-number");
const qNumberSpan = document.getElementById("question-number-span");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const qNumEl = document.getElementById("question-number");

const readingEl = document.querySelector('.reading-question'); // h2
const questionEl = document.querySelector('.font-weight'); // h3
const choiceButtons = document.querySelectorAll('.answer .answer-text');

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
const totalQuestions = 27;

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
    // TODO: load new question + answers here
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 1) {
    currentQuestion--;
    qNumber.textContent = currentQuestion;
    qNumberSpan.textContent = currentQuestion;
     loadQuestion(currentQuestion - 1);
    // TODO: load previous question + answers here
  }
});

// init
