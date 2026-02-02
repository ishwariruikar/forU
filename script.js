// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // --- PLAY BUTTON & SECTIONS ---
  const playBtn = document.getElementById("play-btn");
  const playGate = document.getElementById("play-gate");
  const sections = document.querySelectorAll(".hero, .card, .final");
  const bgMusic = document.getElementById("bg-music");

  playBtn.addEventListener("click", function() {
    // Hide the play gate
    playGate.style.display = "none";

    // Reveal all sections
    sections.forEach(sec => sec.classList.remove("hidden"));

    // Play music
    bgMusic.play().catch(err => {
      console.log("Autoplay blocked, please click the play button manually");
    });
  });

  // --- PLAY MUSIC BUTTON ---
  window.playMusic = function() {
    bgMusic.play();
  };

  // --- POPUPS ---
  window.openPopup = function(id) {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById(id).style.display = "block";
  };

  window.closePopup = function() {
    document.getElementById("popupOverlay").style.display = "none";
    document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
  };

  // --- ALBUM ROTATION ---
  let i = 1;
  setInterval(() => {
    i = i % 17 + 1; // rotates from photo1.jpg → photo17.jpg → back to 1
    const albumImg = document.getElementById("album-img");
    if(albumImg) {
      albumImg.src = `assets/images/photo${i}.jpg`;
    }
  }, 4000); // changes every 4 seconds
});
