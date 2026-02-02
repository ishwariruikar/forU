function openPopup(id) {
  document.getElementById('popupOverlay').style.display = 'block';
  document.getElementById(id).style.display = 'block';
}

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
  document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
}

function playMusic() {
  var music = document.getElementById('bg-music');
  music.play();
}