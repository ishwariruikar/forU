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
// MEMORY ALBUM (safe)
const albumImages = [];
for (let i = 1; i <= 17; i++) {
  albumImages.push(`assets/images/photo${i}.jpeg`);
}

let index = 0;
const albumImg = document.getElementById("album-img");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

if (nextBtn && prevBtn && albumImg) {
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % albumImages.length;
    albumImg.src = albumImages[index];
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + albumImages.length) % albumImages.length;
    albumImg.src = albumImages[index];
  });
}
