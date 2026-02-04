document.addEventListener("DOMContentLoaded", function() {
  const playBtn = document.getElementById("play-btn");
  const playGate = document.getElementById("play-gate");
  const sections = document.querySelectorAll(".hero, .card, .final");
  const bgMusic = document.getElementById("bg-music");

  // Press Play for Us
  playBtn.addEventListener("click", function() {
    playGate.style.display = "none";
    sections.forEach(sec => sec.classList.remove("hidden"));
    bgMusic.play().catch(err => console.log("Click required for autoplay"));
  });

  // POPUPS
  window.openPopup = function(id){
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById(id).style.display = "block";
  }
  window.closePopup = function(){
    document.getElementById("popupOverlay").style.display = "none";
    document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
  }

  // MEMORY ALBUM
  const albumImages = [];
  for(let i=1;i<=17;i++){
    albumImages.push(`assets/images/photo${i}.jpeg`);
  }
  let index = 0;
  const albumImg = document.getElementById("album-img");
  document.getElementById("next-btn").addEventListener("click",()=>{
    index = (index+1)%albumImages.length;
    albumImg.src = albumImages[index];
  });
  document.getElementById("prev-btn").addEventListener("click",()=>{
    index = (index-1+albumImages.length)%albumImages.length;
    albumImg.src = albumImages[index];
  });

  // Floating hearts animation
  for(let i=0;i<15;i++){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = 3 + Math.random()*2 + "s";
    document.querySelector(".hearts").appendChild(heart);
  }
});
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

