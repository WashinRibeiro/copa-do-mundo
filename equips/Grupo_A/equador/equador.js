let hino = document.getElementById('hino');
let playBtn = document.getElementById('play');
let pauseBtn = document.getElementById('pause');

let playShow = function () {
  hino.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";
};

let pauseShow = function () {
  hino.pause();
  playBtn.style.display = "flex";
  pauseBtn.style.display = "none";
};