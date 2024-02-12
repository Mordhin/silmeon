// Vanilla JavaScript to set the clock to your computer time.

var currentSec = getSecondsToday();

var seconds = (currentSec / 60) % 1;
var minutes = (currentSec / 3600) % 1;
var hours = (currentSec / 43200) % 1;

setTime(60 * seconds, "second");
setTime(3600 * minutes, "minute");
setTime(43200 * hours, "hour");

function setTime(left, hand) {
  var clockElement = document.querySelector(".clock__" + hand);
  clockElement.style.animationDelay = left * -1 + "s";
}

function getSecondsToday() {
  var now = new Date();

  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  var diff = now - today;
  return Math.round(diff / 1000);
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const clockElement = document.getElementById("numeric_clock");
  clockElement.textContent = `${formatDigit(hours)}:${formatDigit(minutes)}`;

  const nameFrame = document.getElementById("nameFrame");
  nameFrame.textContent = getName(hours);
}

function formatDigit(digit) {
  return digit < 10 ? "0" + digit : digit;
}

function getName(hours) {
  if (hours >= 0 && hours < 4) {
    return "Porc de Nuit \u{1F437}";
  } else if (hours >= 4 && hours < 8) {
    return "Peter Pan \u{1F98A}";
  } else if (hours >= 8 && hours < 12) {
    return "Solange \u{1F9B9}";
  } else if (hours >= 12 && hours < 16) {
    return "Myrtille \u{1F984}";
  } else if (hours >= 16 && hours < 20) {
    return "Fréjus \u{1F4A6}";
  } else if (hours >= 20 && hours < 24) {
    return "Silméon \u{1F346}";
  }
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately
