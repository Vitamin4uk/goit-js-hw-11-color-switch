import colors from './colors.js';

const refs = {
  body: document.body,
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(e) {
  this.disabled = true;
  setRandomBodyBackground();
  intervalId = setInterval(setRandomBodyBackground, 1000);
}

function onStopBtnClick(e) {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}

function setRandomBodyBackground() {
  const randomIndex = randomIntegerFromInterval(0, colors.length);
  const color = colors[randomIndex];
  refs.body.style.backgroundColor = color;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
