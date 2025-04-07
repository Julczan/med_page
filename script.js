const display = document.querySelector("#timer");
const startBtn = document.querySelector("#start");

function timer() {
  let time = 300;
  let timer = setInterval(() => {
    display.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(timer);
      display.textContent = "thanks";
    }
  }, 1000);
}

startBtn.addEventListener("click", timer);
