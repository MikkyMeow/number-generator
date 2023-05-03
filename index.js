const number = document.getElementById("number");
const to = document.getElementById("to");
const delay = document.getElementById("delay");
const meta = document.getElementById("meta");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

let interval;

const startLoop = () => {
  interval = setInterval(() => {
    number.innerHTML = getRandomInt(+to.value);
  }, delay.value * 1000);
};

const stopLoop = () => {
  clearInterval(interval);
};

start.addEventListener("click", () => startLoop());
stop.addEventListener("click", () => stopLoop());
