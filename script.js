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

// Optional: auto-rotate every 4 seconds
setInterval(()=>{
  index = (index+1)%albumImages.length;
  albumImg.src = albumImages[index];
}, 4000);
