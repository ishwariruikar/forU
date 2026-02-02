const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bg-music");
const gate = document.getElementById("music-gate");
const content = document.getElementById("content");

// ===== PLAY GATE =====
playBtn.addEventListener("click", () => {
  music.play();
  gate.style.display = "none";
  content.classList.remove("hidden");
});

// ===== ALBUM LOGIC =====
let currentIndex = 1;
const totalImages = 17;
const albumImage = document.getElementById("albumImage");

// ⚠️ If your images are NOT .jpg, change extension here
const EXT = "jpg";

document.getElementById("next").onclick = () => {
  currentIndex++;
  if (currentIndex > totalImages) currentIndex = 1;
  albumImage.src = `assets/images/photo${currentIndex}.${EXT}`;
};

document.getElementById("prev").onclick = () => {
  currentIndex--;
  if (currentIndex < 1) currentIndex = totalImages;
  albumImage.src = `assets/images/photo${currentIndex}.${EXT}`;
};