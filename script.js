document.addEventListener("DOMContentLoaded", function() {
  const playBtn = document.getElementById("play-btn");
  const playGate = document.getElementById("play-gate");
  const sections = document.querySelectorAll(".hero, .card, .final");
  const bgMusic = document.getElementById("bg-music");

  playBtn.addEventListener("click", function() {
    // Hide play gate
    playGate.style.display = "none";

    // Reveal all sections
    sections.forEach(sec => sec.classList.remove("hidden"));

    // Play music
    bgMusic.play().catch(err => {
      console.log("Autoplay blocked, please click play button");
    });
  });
});

// Play music button
function playMusic() {
  const music = document.getElementById("bg-music");
  music.play();
}

// Popups
function openPopup(id) {
  document.getElementById("popupOverlay").style.display = "block";
  document.getElementById(id).style.display = "block";
}
function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
  document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
}

// MEMORY ALBUM ROTATION
let i = 1;
setInterval(() => {
  i = i % 17 + 1;
  document.getElementById("album-img").src = `assets/images/Photo${i}.jpeg`;
}, 4000);
