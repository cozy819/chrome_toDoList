// You're gonna need this
const xmasDay = new Date("2021-12-24:00:00:00+0900");
const timeSpace = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const today = new Date();
  const left = xmasDay - today;

  const leftString = timeConvert(left);

  timeSpace.innerText = leftString;
}

function timeConvert(leftMilliSeconds) {
  const days = parseInt(leftMilliSeconds / 86400000);

  const leftHours = leftMilliSeconds - days * 86400000;
  const hours = parseInt(leftHours / 3600000);

  const leftMinutes = leftHours - hours * 3600000;
  const minutes = parseInt(leftMinutes / 60000);

  const leftSeconds = leftMinutes - minutes * 60000;
  const seconds = parseInt(leftSeconds / 1000);

  const leftString = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;

  return leftString;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
