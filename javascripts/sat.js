// entire timer
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
        // Reset timer and question for bluesat2
        sessionStorage.setItem("timeLeft", duration);
        sessionStorage.setItem("isPaused", false);
        sessionStorage.setItem("currentQuestion", 1);
        // redirect user to another html file
        window.location.href = "bluesat2.html";
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

// Entire timer 

const questionBank = [
  {
    text: `The following text is from John Matheus's 1925 novel Fog. The story happens in a city where heavy fog has set in.`,
    question:
      "As used in the text, what does the word 'registered' most nearly mean?",
    choices: ["enrolled", "valued", "disregarded", "displayed"],
  },
  {
    text: `The National Heritage Fellowship was created to publicly _______ exceptional folk and traditional artists in the United States. In 2012, the fellowship was given to the klezmer musician and composer Andy Statman to celebrate his lifetime contributions to the arts.`,
    question:
      "Which choice completes the text with the most logical and precise word or phrase",
    choices: ["recognize", "familiarize", "convey", "startle"],
  },
  {
    text: `The following text is adapted from Kenneth Grahame's 1908 novel The Wind
in the Willows. The Mole is dazed after briefly meeting a stranger while
traveling with a friend.
[The] Mole stood still a moment, held in thought. As one wakened
suddenly from a beautiful dream, who struggles to recall it, and can re-
capture nothing but a dim sense of the beauty of indie—beauty! 'I‘ill that.
too, fades away in its turn.`,
    question:
      "As used in the text, what does the word 'recall' most nearly mean?",
    choices: ["Remember", "Return", "Activate", "Overlook"],
  },
  {
    text: `British painter Peter Edwards is known for his portraits of notable figures in different field, from poet, Vahe Oshagan to casting director Ruth Lambert. Widespread admiration of these works has helped Edwards gain substantial _______ as an artist`,
    question:
      "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["sympathy", "assistance", "tolerance", "prestige"],
  },
  {
    text: `The Krishna. River delta system is located in India, where the river drains
intot'he‘Bay of Bengal, and is shaped by _____ factors: for example, the
geography. of the coastline influences sedimentary deposition, which over
timealters coastal geography.`,
    question:
      "Which choice completes the text with the most logical and precise warden phrase?",
    choices: ["tenuous", "interdependent", "comprehensive", "unyielding"],
  },
  {
    text: `
        I'm the late 18003, Spanish-language newspapers flourished in cities across
Texas. San Antonio alone produced eleven newspapers in Spanish between
1890: and 1900. But El Paso surpassed all other cities in the state. This city
produced twenty-two newspapers in Spanish during that period. El Paso is
located on the border with Mexico and has always had a large population of
Spanish speakers. Thus, it is unsurprising that this city became such a rich
site for Spanish-language journalism.`,
    question:
      "Which choice best states the main purpose of the text?",
    choices: [
      "To compare Spanish-language newspapers published in Texas today with ones published there during the late 1803",
      "To explain that Spanish-language newspapers thrived in'Texas and especially in El Paso during the late 1803",
      "To argue that Spanish-language newspapers published in'Ell Paso influenced the ones published in San Antonio during thelate‘1803",
      "To explain why Spanish-language newspapers publishedin Texas were so popular in Mexico during the late 1803",
    ],
  },
  {
    text: `In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Caracas, Venezuela, and of Fortaleza, Brazil, were surveyed about parks in their cities. Of the 1,043 respondents from Caracas, 44.7% indicated that they use the city's parks, and of the 938 respondents from Fortaleza, 35.7% indicated using city parks. However, given that the percentage of Caracas respondents who reported living within a 10-minute walk of a park was much lower than that reported by Fortaleza respondents, greater proximity alone can't explain the difference in park use.`,
    question:
      "Which choice best describes the function of the underlined portion in the text as a whole?",
    choices: [
      "It introduces a counterexample to the scenario described earlier in the text.",
      "It supports the main claim with statistical evidence.",
      "It clarifies a term used earlier in the passage.",
      "It provides historical context for the argument.",
    ],
  },
  {
    text: `The Amazon rainforest, often referred to as the “lungs of the Earth,” produces a significant share of the world’s oxygen and houses an immense variety of species. Yet, in recent decades, widespread deforestation has threatened both biodiversity and the planet’s climate system. Scientists warn that if the pace of deforestation continues, the Amazon could reach a tipping point where its ecosystem can no longer sustain itself.`,
    question: "What is the main idea of the passage?",
    choices: [
      "The Amazon is vital for both biodiversity and climate stability.",
      "The Amazon is primarily a source of timber and farmland.",
      "Deforestation in the Amazon has slowed in recent years.",
      "The Amazon contributes little to the global environment.",
    ],
  },
  // 3
  {
    text: `In 1928, Alexander Fleming observed that a mold called Penicillium notatum had destroyed colonies of Staphylococcus bacteria on a laboratory plate. Although Fleming himself was cautious about the discovery, his work eventually led to the development of penicillin, the first widely used antibiotic. The drug revolutionized medicine, saving countless lives during World War II and beyond.`,
    question: "Which discovery is described in the passage?",
    choices: [
      "The process of photosynthesis.",
      "The theory of evolution.",
      "The discovery of penicillin.",
      "The invention of anesthesia.",
    ],
  },
  // 4
  {
    text: `During the late 19th century, American women increasingly entered the workforce, though often in positions with limited pay and little recognition. Activists like Susan B. Anthony and Elizabeth Cady Stanton argued that women’s economic contributions justified equal political rights. Their campaign linked suffrage to broader questions of justice and equality within American democracy.`,
    question: "What is the central claim of the passage?",
    choices: [
      "Women’s participation in the workforce supported the demand for political equality.",
      "Women’s economic roles were largely unimportant in 19th-century America.",
      "Suffragists discouraged women from seeking employment outside the home.",
      "Political equality had already been achieved for women by the late 19th century.",
    ],
  },
  // 5
  {
    text: `Paris has high pedestrian traffic, but simply replicating a feature of Paris
associated with walkability—e.g., its high number of car-free areas—may be
insufficient to induce increased walking in other cities. As urbanist Mariela
Alfonzo. argues, our understanding of individuals' decision-making about
Whether to walk is insufficiently robust: some studies emphasize the role of
climate conditions, others the role of population density, and so on, but
walkingdecisions are made in complex contexts in which multiple
conditions and needs inform individuals' choices.`,
    question: "Based on the text, Alfonzo would most likely agree with. which‘statement? about studies of decision-making about walking?",
    choices: [
      "They tend to be misleading because they ignore the most important factor influencing walking decisions.",
      "They have overstated the extent to which people differ in their decision-making processes regarding walking..",
      "They would be improved by efforts to identify the features that cities with high pedestrian traffic have in common.",
      "They are unlikely to find convincing evidence that any single-factor consistently predicts walking decisions.",
    ],
  },
  // 6
  {
    text: `Biologist Rosanna Alegado believes that we might learn how multicellular
Organisms deVeloped from single-celled ones if we understand why the
single-celled organism Salpingoeca rosette, the oldest living relative of
animals, sometimes forms colonies of cells. Alegado and colleagues
reviewed data from many studies of how 8. rosette responds when exposed
to another type of single-celled organism, bacteria, including Stefanie van
Trappen's work with Algoriphagus vanfongensis bacteria and John P.
Bowman's work with Algoriphagus rat/(owskyi bacteria. Alegado and
colleagues concluded that both A. vanfongensis and A. ratkowskyi might
have played a role in the development of multicellular organisms.`,
    question:
      "Which finding, if true, would most directly support Alegadoandcolleagues' conclusion?",
    choices: [
      "S. rosette tended to form colonies when exposed to A. venfongensis and when exposed to A. retkowskyi.",
      "Although several studies involving other bacteria species found that S. rosette tended to form colonies after bacteria exposure, only the studies using A. venfongensis and A. retkowskyi tested whether the amount of bacteria exposure affected the rate of colony formation.",
      "S. rosette tended to form colonies when exposed to A. retkptttskyi but not when exposed to A. venfongensis.",
      "S. rosette tended to form colonies when exposed toA. trenfongensis but not when expoSed to .A. retkowskyi.",
    ],
  },
  // 7
  {
    text: `The Industrial Revolution brought rapid urbanization to Britain, with thousands leaving rural villages to work in factories. While industrial growth created economic opportunity, it also produced overcrowded cities plagued by pollution, poor sanitation, and harsh labor conditions. Social reformers pressed for housing laws, labor protections, and public health measures to address these challenges.`,
    question: "What problem does the passage emphasize?",
    choices: [
      "Economic stagnation in rural villages.",
      "The dangers of urban overcrowding and poor living conditions.",
      "The efficiency of factory work in Britain.",
      "The decline of industrial growth in the 19th century.",
    ],
  },
  // 8
  {
    text: `Marie Curie’s groundbreaking research on radioactivity earned her two Nobel Prizes, one in physics and another in chemistry. Despite facing skepticism and barriers as a woman in science, she pioneered methods of isolating radioactive isotopes and discovered the elements polonium and radium. Her work laid the foundation for advances in medicine and nuclear energy.`,
    question: "What does the passage highlight about Marie Curie?",
    choices: [
      "Her research was limited to teaching rather than discovery.",
      "She made significant contributions despite obstacles.",
      "She relied heavily on the work of other scientists.",
      "She abandoned research after early experiments failed.",
    ],
  },
  // 9
  {
    text: `TheStudy'on Global Ageing and Adult Health (SAGE) examines trends in
aging among 66,000 people in multiple countries unfolding over many
years. As is true of most longitudinal studies, this need for years of data
collectiOn results in high costs. By contrast, a relatively straightforward
sociology study, such as one that is merely trying to identify the average age
at which peOple in a given city first become parents, may not need a large
budget because ______`,
    question: "Which choice most logically completes the text?",
    choices: [
      "longitudinal methods are probably suitable for the sociology study.",
      "it would be easy for SAGE researchers to add questions to their aging study.",
      "66.000 people is more than enough for SAGE to find trends in aging.",
      "the sociology study can be done well without years of data collection.",
    ],
  },
  // 10
  {
    text: `In 1776, the American Declaration of Independence asserted that governments derive “their just powers from the consent of the governed.” This idea, influenced by Enlightenment philosophers such as John Locke, challenged monarchies based on hereditary rule. The declaration not only justified separation from Britain but also inspired democratic movements worldwide.`,
    question: "Which idea most influenced the Declaration of Independence?",
    choices: [
      "The belief that rulers should govern without limits.",
      "The principle that authority comes from the people.",
      "The view that hereditary monarchy is necessary.",
      "The argument that democracy leads to chaos.",
    ],
  },
  // 11
  {
    text: `Oyster mushrooms typically get their nutrients from the damp logs on
which they grow, but the fungi are also carnivorous, with the ability to kill
and consume microsc0pic worms known as nematodes. As researcher Yen-
Ping Hsueh has shown, the mushrooms release a toxin that is deadly to
nematodes that ______ in contact with it.`,
    question: "Which choice completes the text so that it conforms to the conventionspf Standard English?",
    choices: [
      "has come",
      "comes",
      "is coming",
      "come",
    ],
  },
  // 12
  {
    text: `Cut, bent, and welded from discarded metal materials, the sculptures of
London-based Nigerian artist Sokari Douglas Camp are meant to challenge
viewers to consider their own relationships to material __ her thought-
.provoking works in the 1985 to 1988 exhibition Alali at the October Gallery
tin-London were no different.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English",
    choices: [
      "wastes",
      "wastes,",
      "wastes;",
      "wastes and to",
    ],
  },
  // 13
  {
    text: `Scholar‘s Tamy Kernodle and Paul Austerlitz have lent their expertise on
Black history-and music to an important new project: the Timeline of
African American Music, a digital _ through a rich combination of text,
imagesand music clips, traces the development of specific musical genres
(such as funk and swing)`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "resource, that",
      "resource, that,",
      "resource that,",
      "resource that",
    ],
  },
  // 14
  {
    text: `In-Los Angeles County, California, bicycle paths such as the Browns Creek
bike trail—which is about 0.91 miles long—have become an increasingly popular means of travel. Moreover, lawyer and cycling _____ has identified
several features of the Los Angeles landscape, like its temperate climate and
mostly flat roads, that make the city naturally bike-friendly.`,
    question: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      "advocate, Ernesto Hernandez—Lopez,",
      "advocate Ernesto Hernandez-Lopez",
      "advocate Ernesto Hernandez-Lopez,",
      "advocate, Ernesto Hernandez-Lopez",
    ],
  },
  // 15
  {
    text: `Ecologists like David N.M. Mbora use trophic pyramids to illustrate the food
Chain within a given ecosystem. At a typical pyramid's base are primary
producers, like plants, followed by herbivores at the second trophic level,
then Omnivores and carnivores at the third. ______  at the fourth, highest
trophic level are apex predators, like tigers, that feed on the animals below.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "In fact,",
      "Besides,",
      "For example,",
      "Lastly,",
    ],
  },
  // 16
  {
    text: `In a: 2022 analysis of 200 terms, researchers found a broad pattern of
valence-dependent mutation in which negative adjectives saw a faster rate
of Cognate replacement—the rate at which a word will be replaced over
time with a noncognate form—than other words. _____ the adjective
"illegal" would be expected to mutate faster than the noun "debt."`,
    question:
      "Which choice completes the text with the most logical transition?",
    choices: [
      "Thus,",
      "Meanwhile,",
      "However",
      "Morever,",
    ],
  },
  // 17
  {
    text: `In thexearly 19703, Albert Popa took up graffiti art, spraying his work onto
whatwasat the time an unconventional surface: concrete. ______ Albert's
son David has chosen an unusual canvas for his new art project, Fractured.
Inthisremarkable work, the artist draws charcoal faces onto fragmented
ice flees in Finland, creating the visual effect of a face slowly fracturing.`,
    question: "Which choice completes the text with the most logical transition?",
    choices: [
      "However,",
      "Indeed,",
      "Second,",
      "Likewise",
    ],
  },
  // 18 
  {
    text: `• Ynés Mexia was a Mexican American botanist. Between 1917 and 1938, she collected over 150,000 botanical samples throughout the Americas.
• She collected a sample ofAchyrocline veuthieriene in Minas Gerais, Brazil, on May 3, 1930.
• She collected a sample of Vernonie lietroides in jalisco. Mexico. on February 14, 1927.
• These specimens are members of the Asteraceae family. They can now be viewed online at the CV. Starr Virtual Herbarium.`,
    question: "Which choice most effectively uses information from the given sentences to emphasize when she collected both of the samples?",
    choices: [
      "Thousands of botanical samples collected by Ynés Mexia can now be found in one place: online at the CV. Starr Virtual Herbarium.",
      "SOn May 3 in 1930. Ynés Mexia addetl a new specimen to her growing collection of botanical samples: Achyrocline veutlzieriene of the Asteraceae family.",
      "While both specimens collected by Ynés Mexia are members of the same family. chlu-rrocline reuthieriene was found in Minas Gerais anti Il'ernonie Iietroides was found in jalisco.",
      "Ynés Mexia collected a sample of .tlclwrocline vettthieriene in May of 1930, after collecting lr'ernonie Iietroides in February of 1927",
    ],
  },
  // 19
  {
    text: `While researching a topic, a student has taken the following notes:
• In 1965, Yale University historians claimed that a world map called
the Vinland Map was drawn in the fifteenth century.
• Since that time, the map's age has been the subject of debate.
• In 2021, researchers conducted a study to analyze the elemental
composition of the map's ink.
- Their analysis revealed that the ink contains a titanium compound
not used in inks until the 19203.
• The researchers concluded that the map was drawn in the twentieth
century.`,
    question: "The student wants to present the stutly and its findings. Which choice most effectively uses relevant information from the notes to accomplish this goal? ",
    choices: [
      "Given the debate about the Vinland Map's age, researchers in 2021 contlucted a study to analyze the elemental composition of the maps ink.",
      "A 2021 study of the Vinland Map's ink revealed that it contains a titanium compound not used in inks until the 19203, indicating that the map was drawn in the twentieth century.",
      "The Vinland Map. believed by some to have been drawn in the fifteenth century. was the focus of a 2021 study.",
      "Aware that a certain titanium compound was not used in inks until the 19203. researchers in 2021 studied the elemental composition of the vinland man's ink",
    ],
  },
  // 20
  {
    text: `While researching a topic, a student has taken the following notes,
    • The Santa Catalina Mountains are a mountain range located in the southwest United States.
    • The range is one of the dozens of "sky island" in the southwestern US and northwestern Mexico.
    • A sky island is an isolated mountain range whose environment differs drastically from that of a surrounding lowlands.
    • The US Forest Service (USFS) said "The Mountains are islands" surrounded by deserts that are seas
    • The USFS said "Each Sky island is a unique ecosystem"
    `,
    question: "The student wants to explain what a sky island is. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    choices: [
      "The USFS considers the Santa Catalina Mountains to he a unique ecosystem.",
      "A sky island is an isolated mountain range. such as the Santa (‘Catalina Mountains in the southwestern US, whose environment differs drastically from that of the surrounding lowlands.",
      "The Santa Catalina Mountains. which are considered to he a sky island. are located in the southwestern US.",
      "The Santa Catalina Mountains are an isolated mountain range located in the southwestern United States whose environment differs drastically from that of the surrounding lowlands.",
    ],
  },
  // 21
  {
    text: `While researching a topic, a student has taken the following notes:
- The international Center for the Arts of the Americas (ICAA) is
directed by Mari Carmen Ramirez.

• Ramirez oversaw an initiative to create an online archive of
historical documents related to the history of Latin American and
Latino visual art.

• The lCAA digitized over 10,000 documents, including the writings of
. Latin American and Latino artists and critics.
• Thecreation of the archive didn't require historical documents to I):
removed from their countries of origin.
-- .S'c‘holars now have more access to these documents.`,
    question: " The student wants to explain an advantage of the ICAA's archive being digital. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    choices: [
      "Over 10000 documents related to the history of Latin American and Latino visual art are part of the ICAA archive.",
      "By offering online versions of historical documents, the ICAA's archive provides more access to these materials without removing them from their countries of origin.",
      "Among the historical documents in the ICAA'S archive are the writings of Latin American and Latino artists and critics.",
      "l‘he lCAA-‘s director. Mari Carmen Ramirez,oversawthe creation of an online archive of historical documents related to Latin American and Latino visual art.",
    ],
  },
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
    // Save current question state to sessionStorage
    sessionStorage.setItem("currentQuestion", currentQuestion);
    // TODO: load new question + answers here
  } else if (currentQuestion === totalQuestions) {
    // Redirect to pitstopEnglish.html when quiz ends
    window.location.href = "pitstopEnglish.html";
  }
  
});prevBtn.addEventListener("click", () => {
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
// Restore question state from sessionStorage if navigating back from pitstopEnglish
if (sessionStorage.getItem("currentQuestion")) {
  currentQuestion = parseInt(sessionStorage.getItem("currentQuestion"));
  qNumber.textContent = currentQuestion;
  qNumberSpan.textContent = currentQuestion;
  loadQuestion(currentQuestion - 1);
}
