// 💗 MASTER PLAY BUTTON
const playBtn = document.getElementById("play-btn");
const playGate = document.getElementById("play-gate");
const bgMusic = document.getElementById("bg-music");
const quizSection = document.getElementById("quiz-section");

playBtn.addEventListener("click", () => {
  playGate.style.display = "none";

  document.querySelectorAll(".hidden").forEach(el => {
    el.classList.remove("hidden");
  });

  if (bgMusic) bgMusic.play().catch(() => {});
  if (quizSection) quizSection.style.display = "block";
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

// Floating hearts
for(let i=0;i<15;i++){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = 3 + Math.random()*2 + "s";
  document.querySelector(".hearts").appendChild(heart);
}
