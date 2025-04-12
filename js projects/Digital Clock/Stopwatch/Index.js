const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let StartCount = 0;
let intervalId;

const startTimer = () => {
  intervalId = setInterval(() => {
    countDownElement.innerText = StartCount++;
  }, 1000);
};

const stopTimer = () => clearInterval(intervalId);

const resetTimer = () => {
  stopTimer();
  StartCount = 0;
  countDownElement.innerText = "0";
};

const showStopValue = () => {
  const newPara = document.createElement("p");
  newPara.innerText = `The stop time is ${StartCount - 1}`;
  resetValueElement.append(newPara);
};

const clearTimerValue = () => {
  resetValueElement.innerHTML = "";
};

document.querySelector(".start-btn").addEventListener("click", startTimer);
document.querySelector(".stop-btn").addEventListener("click", stopTimer);
document.querySelector(".reset-btn").addEventListener("click", resetTimer);
document.querySelector(".time-btn").addEventListener("click", showStopValue);
document.querySelector(".clear-btn").addEventListener("click", clearTimerValue);
