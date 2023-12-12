function playSound(idSound) {
  document.querySelector(idSound).play();
}

const keysList = document.querySelectorAll(".key");

let count = 0;

while (count < keysList.length) {
  keysList[count].onclick = function () {
    playSound();
  };

  count = count + 1;
}
