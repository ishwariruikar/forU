const playBtn = document.getElementById("play-btn");
const gate = document.getElementById("play-gate");
const music = document.getElementById("bg-music");
const sections = document.querySelectorAll(".hidden");

playBtn.addEventListener("click", () => {
  music.play();
  gate.style.display = "none";
  sections.forEach(s => s.style.display = "block");
});

function playMusic() {
  music.play();
}

function openPopup(id) {
  document.getElementById("popupOverlay").style.display = "block";
  document.getElementById(id).style.display = "block";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
  document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
}

// ALBUM ROTATION
let i = 1;
setInterval(() => {
  i = i % 17 + 1;
  document.getElementById("album-img").src = `assets/images/photo${i}.jpg`;
}, 4000);
