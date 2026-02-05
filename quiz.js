const questions = [
  {
    question: "Status check 😌",
    answers: ["Friend","Stranger","Girl bestie","Mom (scolds + cares) 😆❤️"],
    correct: 3,
    message: "You scold like one too 😌"
  },
  {
    question: "Who is cooler? 😎",
    answers: ["Me","You"],
    correct: 1,
    message: "Your misunderstanding 😆"
  },
  {
    question: "Whom do I love the most? 💗",
    answers: ["Sakshi","You","My girl bestie","All of the above"],
    correct: 3,
    message: "Obviously 💗"
  }
];

let currentQ = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result-text");
const finalMsg = document.getElementById("final-message");
const spotify = document.getElementById("spotify-reward");

function loadQuestion() {
  const q = questions[currentQ];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  resultEl.innerText = "";

  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  if(index === questions[currentQ].correct){
    resultEl.innerText = questions[currentQ].message;
    setTimeout(nextQuestion,1500);
  } else {
    resultEl.innerText = "Try again 😜";
  }
}

function nextQuestion() {
  currentQ++;
  if(currentQ < questions.length){
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function typeWriter(text, i = 0) {
  if (i < text.length) {
    finalMsg.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 40);
  } else {
    revealSpotify();
  }
}

function finishQuiz() {
  questionEl.style.display="none";
  optionsEl.style.display="none";
  resultEl.style.display="none";

  const message = "Not every song is about love. Some are about comfort, laughter, and being there. This playlist is you 💗";
  typeWriter(message);

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function revealSpotify() {
  spotify.classList.remove("hidden");
  setTimeout(()=> spotify.classList.add("show"),200);
}

loadQuestion();
